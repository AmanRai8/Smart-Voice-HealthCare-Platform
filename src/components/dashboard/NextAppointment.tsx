import { getUserAppointments } from "@/lib/actions/appointments";
import { format, isAfter, isSameDay, parseISO } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import NoNextAppointments from "./NoNextAppointments";
import NextAppointmentActions from "./NextAppointmentsActions";

async function NextAppointment() {
  const appointments = await getUserAppointments();

  const upcomingAppointments =
    appointments?.filter((appointment: any) => {
      const appointmentDate = parseISO(appointment.date);
      const today = new Date();
      const isUpcoming =
        isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);

      // show only actionable statuses
      return isUpcoming && ["PENDING", "CONFIRMED"].includes(appointment.status);
    }) || [];

  // already sorted in your server action, but safe anyway
  const nextAppointment = upcomingAppointments[0];

  if (!nextAppointment) return <NoNextAppointments />;

  const appointmentDate = parseISO(nextAppointment.date);
  const formattedDate = format(appointmentDate, "EEEE, MMMM d, yyyy");
  const isToday = isSameDay(appointmentDate, new Date());

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <CalendarIcon className="size-4 sm:size-5 text-primary" />
          Next Appointment
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-primary">
              {isToday ? "Today" : "Upcoming"}
            </span>
          </div>

          <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
            {nextAppointment.status}
          </span>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <UserIcon className="size-3.5 sm:size-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-xs sm:text-sm truncate">{nextAppointment.doctorName}</p>
              <p className="text-xs text-muted-foreground truncate">{nextAppointment.reason}</p>
            </div>
          </div>

          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <CalendarIcon className="size-3.5 sm:size-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-xs sm:text-sm">{formattedDate}</p>
              <p className="text-xs text-muted-foreground">
                {isToday ? "Today" : format(appointmentDate, "EEEE")}
              </p>
            </div>
          </div>

          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <ClockIcon className="size-3.5 sm:size-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-xs sm:text-sm">{nextAppointment.time}</p>
              <p className="text-xs text-muted-foreground">Local time</p>
            </div>
          </div>
        </div>

        {/* ✅ Client-side action buttons */}
        <NextAppointmentActions appointmentId={nextAppointment.id} />

        {upcomingAppointments.length > 1 && (
          <p className="text-xs text-center text-muted-foreground pt-1">
            +{upcomingAppointments.length - 1} more upcoming appointment
            {upcomingAppointments.length > 2 ? "s" : ""}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default NextAppointment;