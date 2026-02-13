"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  useCancelAppointment,
  useRescheduleAppointment,
} from "@/hooks/use-appointments";
import { getNext5Days, getAvailableTimeSlots } from "@/lib/utils";

export default function NextAppointmentActions({
  appointmentId,
}: {
  appointmentId: string;
}) {
  const router = useRouter();
  const cancelMutation = useCancelAppointment();
  const rescheduleMutation = useRescheduleAppointment();

  const [open, setOpen] = useState(false);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const next5Days = useMemo(() => getNext5Days(), []);
  const timeSlots = useMemo(() => getAvailableTimeSlots(), []);

  const closeModal = () => {
    setOpen(false);
    setNewDate("");
    setNewTime("");
  };

  return (
    <>
      <div className="flex gap-2 pt-2">
        <button
          type="button"
          className="flex-1 px-3 py-2 rounded-md border text-xs sm:text-sm hover:bg-muted disabled:opacity-60 transition-colors"
          onClick={() => setOpen(true)}
          disabled={cancelMutation.isPending || rescheduleMutation.isPending}
        >
          Reschedule
        </button>

        <button
          type="button"
          className="flex-1 px-3 py-2 rounded-md bg-red-500 text-white text-xs sm:text-sm hover:bg-red-600 disabled:opacity-60 transition-colors"
          onClick={() => {
            cancelMutation.mutate(
              { id: appointmentId },
              {
                onSuccess: () => {
                  toast.success("Appointment cancelled");
                  router.refresh();
                },
                onError: (e: any) =>
                  toast.error(e?.message ?? "Failed to cancel"),
              }
            );
          }}
          disabled={cancelMutation.isPending || rescheduleMutation.isPending}
        >
          Cancel
        </button>
      </div>

      {/* Reschedule Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 sm:px-6">
          <div className="w-full max-w-lg rounded-xl bg-background p-4 sm:p-5 border max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold">Reschedule Appointment</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Pick a new date and time (next 5 days).
                </p>
              </div>

              <button
                onClick={closeModal}
                className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-md border hover:bg-muted transition-colors shrink-0"
                type="button"
              >
                Close
              </button>
            </div>

            {/* Date picker */}
            <div className="space-y-2 mb-4 sm:mb-5">
              <p className="text-xs sm:text-sm font-medium">Choose a date</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {next5Days.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setNewDate(d)}
                    className={`px-2.5 sm:px-3 py-2 rounded-md border text-xs sm:text-sm text-left hover:bg-muted transition-colors ${
                      newDate === d ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Time slots */}
            <div className="space-y-2 mb-5 sm:mb-6">
              <p className="text-xs sm:text-sm font-medium">Choose a time</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setNewTime(t)}
                    className={`px-2 sm:px-3 py-2 rounded-md border text-xs sm:text-sm hover:bg-muted transition-colors ${
                      newTime === t ? "border-primary bg-primary/10" : ""
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Confirm */}
            <div className="flex gap-2">
              <button
                className="flex-1 px-3 py-2 rounded-md border hover:bg-muted text-xs sm:text-sm transition-colors"
                onClick={closeModal}
                type="button"
              >
                Cancel
              </button>

              <button
                className="flex-1 px-3 py-2 rounded-md bg-primary text-white hover:opacity-90 disabled:opacity-60 text-xs sm:text-sm transition-all"
                type="button"
                disabled={!newDate || !newTime || rescheduleMutation.isPending}
                onClick={() => {
                  if (!newDate || !newTime) {
                    toast.error("Please select date and time");
                    return;
                  }

                  rescheduleMutation.mutate(
                    { id: appointmentId, date: newDate, time: newTime },
                    {
                      onSuccess: () => {
                        toast.success("Appointment rescheduled");
                        closeModal();
                        router.refresh();
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