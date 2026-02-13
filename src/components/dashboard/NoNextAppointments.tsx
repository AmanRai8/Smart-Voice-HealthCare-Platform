import { CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

function NoNextAppointments() {
  return (
    <Card>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <CalendarIcon className="size-4 sm:size-5 text-primary" />
          Next Appointment
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="text-center py-6 sm:py-8 text-muted-foreground">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-muted/30 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <CalendarIcon className="size-7 sm:size-8 opacity-50" />
          </div>
          <p className="text-xs sm:text-sm mb-3">No upcoming appointments</p>
          <Link href="/appointments">
            <Button size="sm" variant="outline" className="w-full text-xs sm:text-sm">
              Schedule Your Next Visit
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default NoNextAppointments;