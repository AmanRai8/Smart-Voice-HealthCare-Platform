"use client";

import { useMemo, useState } from "react";
import { format, isAfter, isSameDay, parseISO } from "date-fns";
import { toast } from "sonner";

import { AppointmentConfirmationModal } from "@/components/appointments/AppointmentConfirmationModal";
import BookingConfirmationStep from "@/components/appointments/BookingConfirmationStep";
import DoctorSelectionStep from "@/components/appointments/DoctorSelectionStep";
import ProgressSteps from "@/components/appointments/ProgressSteps";
import TimeSelectionStep from "@/components/appointments/TimeSelectionStep";
import Header from "@/components/landing/Header";
import Navbar from "@/components/Navbar";

import {
  useBookAppointment,
  useCancelAppointment,
  useRescheduleAppointment,
  useUserAppointments,
} from "@/hooks/use-appointments";

import { APPOINTMENT_TYPES, getAvailableTimeSlots, getNext5Days } from "@/lib/utils";
import { SignInButton, useUser } from "@clerk/nextjs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

function AppointmentsPage() {
  const { isSignedIn } = useUser();

  const [selectedDentistId, setSelectedDentistId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [bookedAppointment, setBookedAppointment] = useState<any>(null);

  const bookAppointmentMutation = useBookAppointment();
  const cancelMutation = useCancelAppointment();
  const rescheduleMutation = useRescheduleAppointment();

  const { data: userAppointments = [] } = useUserAppointments();

  // Reschedule modal state
  const [openReschedule, setOpenReschedule] = useState(false);
  const [rescheduleId, setRescheduleId] = useState<string | null>(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const next5Days = useMemo(() => getNext5Days(), []);
  const timeSlots = useMemo(() => getAvailableTimeSlots(), []);

  const closeReschedule = () => {
    setOpenReschedule(false);
    setRescheduleId(null);
    setNewDate("");
    setNewTime("");
  };

  const openRescheduleModal = (id: string) => {
    setRescheduleId(id);
    setNewDate("");
    setNewTime("");
    setOpenReschedule(true);
  };

  if (!isSignedIn) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center px-6">
          <p className="text-lg text-center mb-4">
            You need to sign in to book or view appointments.
          </p>
          <SignInButton mode="modal">
            <button className="px-4 py-2 bg-primary text-white rounded-md">
              Sign In
            </button>
          </SignInButton>
        </div>
      </>
    );
  }

  const handleSelectDentist = (dentistId: string) => {
    setSelectedDentistId(dentistId);
    setSelectedDate("");
    setSelectedTime("");
    setSelectedType("");
  };

  const handleBookAppointment = async () => {
    if (!selectedDentistId || !selectedDate || !selectedTime) {
      toast.error("Please fill in all required fields");
      return;
    }

    const appointmentType = APPOINTMENT_TYPES.find((t) => t.id === selectedType);

    bookAppointmentMutation.mutate(
      {
        doctorId: selectedDentistId,
        date: selectedDate,
        time: selectedTime,
        reason: appointmentType?.name,
      },
      {
        onSuccess: async (appointment) => {
          setBookedAppointment(appointment);

          try {
            const emailResponse = await fetch("/api/send-appointment-email", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userEmail: appointment.patientEmail,
                doctorName: appointment.doctorName,
                appointmentDate: format(new Date(appointment.date), "EEEE, MMMM d, yyyy"),
                appointmentTime: appointment.time,
                appointmentType: appointmentType?.name,
                duration: appointmentType?.duration,
                price: appointmentType?.price,
              }),
            });

            if (!emailResponse.ok) console.error("Failed to send confirmation email");
          } catch (error) {
            console.error("Error sending confirmation email:", error);
          }

          setShowConfirmationModal(true);

          setSelectedDentistId(null);
          setSelectedDate("");
          setSelectedTime("");
          setSelectedType("");
          setCurrentStep(1);
        },
        onError: (error) => toast.error(`Failed to book appointment: ${error.message}`),
      }
    );
  };

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Book an Appointment</h1>
          <p className="text-muted-foreground">
            Find and book with a verified doctor available
          </p>
        </div>

        <ProgressSteps currentStep={currentStep} />

        {currentStep === 1 && (
          <DoctorSelectionStep
            selectedDentistId={selectedDentistId}
            onContinue={() => setCurrentStep(2)}
            onSelectDentist={handleSelectDentist}
          />
        )}

        {currentStep === 2 && selectedDentistId && (
          <TimeSelectionStep
            selectedDentistId={selectedDentistId}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedType={selectedType}
            onBack={() => setCurrentStep(1)}
            onContinue={() => setCurrentStep(3)}
            onDateChange={setSelectedDate}
            onTimeChange={setSelectedTime}
            onTypeChange={setSelectedType}
          />
        )}

        {currentStep === 3 && selectedDentistId && (
          <BookingConfirmationStep
            selectedDentistId={selectedDentistId}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedType={selectedType}
            isBooking={bookAppointmentMutation.isPending}
            onBack={() => setCurrentStep(2)}
            onModify={() => setCurrentStep(2)}
            onConfirm={handleBookAppointment}
          />
        )}
      </div>

      {bookedAppointment && (
        <AppointmentConfirmationModal
          open={showConfirmationModal}
          onOpenChange={setShowConfirmationModal}
          appointmentDetails={{
            doctorName: bookedAppointment.doctorName,
            appointmentDate: format(new Date(bookedAppointment.date), "EEEE, MMMM d, yyyy"),
            appointmentTime: bookedAppointment.time,
            userEmail: bookedAppointment.patientEmail,
          }}
        />
      )}

      {/* SHOW EXISTING APPOINTMENTS FOR THE CURRENT USER */}
      {userAppointments.length > 0 && (
        <div className="mb-8 max-w-7xl mx-auto px-6 py-8">
          <h2 className="text-xl font-semibold mb-4">Your Upcoming Appointments</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {userAppointments.map((appointment: any) => {
              const appointmentDate = parseISO(appointment.date);
              const today = new Date();
              const isUpcoming =
                isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);

              // show actions only for pending/confirmed future appointments
              const canManage =
                isUpcoming && ["PENDING", "CONFIRMED"].includes(appointment.status);

              return (
                <div
                  key={appointment.id}
                  className="bg-card border rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                          appointment.doctorName
                        )}&background=random&size=128&bold=true&rounded=true`}
                        alt={appointment.doctorName}
                        className="size-10 rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            appointment.doctorName
                          )}&background=0D8ABC&color=fff&size=128`;
                        }}
                      />

                      <div>
                        <p className="font-medium text-sm">{appointment.doctorName}</p>
                        <p className="text-muted-foreground text-xs">
                          {appointment.reason}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                      {appointment.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      📅 {format(new Date(appointment.date), "MMM d, yyyy")}
                    </p>
                    <p className="text-muted-foreground">🕐 {appointment.time}</p>
                  </div>

                  {/* Actions */}
                  {canManage && (
                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        className="flex-1 px-3 py-2 rounded-md border text-sm hover:bg-muted disabled:opacity-60"
                        onClick={() => openRescheduleModal(appointment.id)}
                        disabled={cancelMutation.isPending || rescheduleMutation.isPending}
                      >
                        Reschedule
                      </button>

 <AlertDialog>
  <AlertDialogTrigger asChild>
    <button
      type="button"
      className="flex-1 px-3 py-2 rounded-md bg-red-500 text-white text-sm hover:bg-red-600 disabled:opacity-60"
      disabled={cancelMutation.isPending || rescheduleMutation.isPending}
    >
      Cancel
    </button>
  </AlertDialogTrigger>

  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Cancel this appointment?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. The appointment will be cancelled permanently.
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel>Keep</AlertDialogCancel>

      <AlertDialogAction
        onClick={() => {
          cancelMutation.mutate(
            { id: appointment.id },
            {
              onSuccess: () => toast.success("Appointment cancelled"),
              onError: (e: any) => toast.error(e?.message ?? "Failed to cancel"),
            }
          );
        }}
        disabled={cancelMutation.isPending || rescheduleMutation.isPending}
      >
        Yes, cancel
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>


                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Reschedule Modal */}
      {openReschedule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="w-full max-w-lg rounded-xl bg-background p-5 border">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Reschedule Appointment</h3>
                <p className="text-sm text-muted-foreground">
                  Pick a new date and time (next 5 days).
                </p>
              </div>

              <button
                onClick={closeReschedule}
                className="text-sm px-3 py-1 rounded-md border hover:bg-muted"
                type="button"
              >
                Close
              </button>
            </div>

            {/* Date picker */}
            <div className="mt-5 space-y-2">
              <p className="text-sm font-medium">Choose a date</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {next5Days.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setNewDate(d)}
                    className={`px-3 py-2 rounded-md border text-sm text-left hover:bg-muted ${
                      newDate === d ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time slots */}
            <div className="mt-5 space-y-2">
              <p className="text-sm font-medium">Choose a time</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setNewTime(t)}
                    className={`px-3 py-2 rounded-md border text-sm hover:bg-muted ${
                      newTime === t ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Confirm */}
            <div className="mt-6 flex gap-2">
              <button
                className="flex-1 px-3 py-2 rounded-md border hover:bg-muted"
                onClick={closeReschedule}
                type="button"
              >
                Cancel
              </button>

              <button
                className="flex-1 px-3 py-2 rounded-md bg-primary text-white hover:opacity-90 disabled:opacity-60"
                type="button"
                disabled={!rescheduleId || !newDate || !newTime || rescheduleMutation.isPending}
                onClick={() => {
                  if (!rescheduleId || !newDate || !newTime) {
                    toast.error("Please select date and time");
                    return;
                  }

                  rescheduleMutation.mutate(
                    { id: rescheduleId, date: newDate, time: newTime },
                    {
                      onSuccess: () => {
                        toast.success("Appointment rescheduled");
                        closeReschedule();
                      },
                      onError: (e: any) =>
                        toast.error(e?.message ?? "Failed to reschedule"),
                    }
                  );
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AppointmentsPage;
