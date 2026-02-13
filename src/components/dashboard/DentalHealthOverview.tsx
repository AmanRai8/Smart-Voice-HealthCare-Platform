import { getUserAppointmentStats } from "@/lib/actions/appointments";
import { currentUser } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BrainIcon, MessageSquareIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";

async function HealthOverview() {
  const appointmentStats = await getUserAppointmentStats();
  const user = await currentUser();

  return (
    <Card className="lg:col-span-2">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <BrainIcon className="size-4 sm:size-5 text-primary" />
          Your Health
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Keep track of your health care journey
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          <div className="text-center p-3 sm:p-4 bg-muted/30 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
              {appointmentStats.completedAppointments}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Completed Visits
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-muted/30 rounded-xl">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
              {appointmentStats.totalAppointments}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Total Appointments
            </div>
          </div>
          <div className="text-center p-3 sm:p-4 bg-muted/30 rounded-xl sm:col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl font-bold text-primary mb-1">
              {format(new Date(user?.createdAt!), "MMM yyyy")}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">Member Since</div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <div className="size-9 sm:size-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
              <MessageSquareIcon className="size-4 sm:size-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-primary mb-1 text-sm sm:text-base">
                Ready to get started?
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                Book your first appointment or try our AI voice assistant for
                instant health advice.
              </p>
              <div className="flex flex-col xs:flex-row gap-2">
                <Link href="/voice" className="flex-1 xs:flex-none">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 w-full xs:w-auto text-xs sm:text-sm">
                    Try AI Assistant
                  </Button>
                </Link>
                <Link href="/appointments" className="flex-1 xs:flex-none">
                  <Button size="sm" variant="outline" className="w-full xs:w-auto text-xs sm:text-sm">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default HealthOverview;