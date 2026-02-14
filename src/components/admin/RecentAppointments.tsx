"use client";

import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar, CheckCircle2, RotateCcw, XCircle, Search, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  useGetAppointments,
  useUpdateAppointmentStatus,
} from "@/hooks/use-appointments";

function RecentAppointments() {
  const { data: appointments = [] } = useGetAppointments();
  const updateAppointmentMutation = useUpdateAppointmentStatus();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const setStatus = (appointmentId: string, status: any) => {
    updateAppointmentMutation.mutate(
      { id: appointmentId, status },
      {
        onSuccess: () => toast.success(`Appointment marked as ${status}`),
        onError: (e: any) => toast.error(e?.message ?? "Failed to update status"),
      }
    );
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      PENDING: <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs">Pending</Badge>,
      CONFIRMED: <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 text-xs">Confirmed</Badge>,
      COMPLETED: <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 text-xs">Completed</Badge>,
      CANCELLED: <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 text-xs">Cancelled</Badge>,
    };
    return badges[status as keyof typeof badges] || <Badge variant="secondary" className="text-xs">{status}</Badge>;
  };

  // Filter appointments
  const filteredAppointments = appointments.filter((appointment: any) => {
    const matchesSearch = 
      appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.reason.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || appointment.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    all: appointments.length,
    CONFIRMED: appointments.filter((a: any) => a.status === "CONFIRMED").length,
    COMPLETED: appointments.filter((a: any) => a.status === "COMPLETED").length,
    CANCELLED: appointments.filter((a: any) => a.status === "CANCELLED").length,
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Recent Appointments
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm mt-1">
              Monitor and manage all patient appointments
            </CardDescription>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 text-sm"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {Object.entries(statusCounts).map(([status, count]) => (
              <Button
                key={status}
                variant={filterStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterStatus(status)}
                className="flex-shrink-0 text-xs capitalize"
              >
                {status === "all" ? "All" : status.toLowerCase()} ({count})
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0 sm:p-6 sm:pt-0">
        {/* Desktop Table View */}
        <div className="hidden lg:block rounded-lg border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredAppointments.map((appointment: any) => {
                const disabled = updateAppointmentMutation.isPending;

                return (
                  <TableRow key={appointment.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">{appointment.patientName}</div>
                        <div className="text-xs text-muted-foreground truncate max-w-[200px]">
                          {appointment.patientEmail}
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="font-medium text-sm">{appointment.doctorName}</TableCell>

                    <TableCell>
                      <div>
                        <div className="font-medium text-sm">
                          {new Date(appointment.date).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {appointment.time}
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="text-sm">{appointment.reason}</TableCell>

                    <TableCell>{getStatusBadge(appointment.status)}</TableCell>

                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2 min-w-[280px]">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setStatus(appointment.id, "CONFIRMED")}
                          disabled={disabled || appointment.status === "COMPLETED"}
                          className="gap-1 text-xs"
                        >
                          <CheckCircle2 className="size-3" />
                          Confirm
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setStatus(appointment.id, "COMPLETED")}
                          disabled={disabled || appointment.status === "CANCELLED"}
                          className="gap-1 text-xs"
                        >
                          <CheckCircle2 className="size-3" />
                          Complete
                        </Button>

                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => setStatus(appointment.id, "CANCELLED")}
                          disabled={disabled || appointment.status === "COMPLETED"}
                          className="gap-1 text-xs"
                        >
                          <XCircle className="size-3" />
                          Cancel
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setStatus(appointment.id, "CONFIRMED")}
                          disabled={
                            disabled ||
                            !["CANCELLED", "PENDING"].includes(appointment.status)
                          }
                          className="gap-1 text-xs"
                        >
                          <RotateCcw className="size-3" />
                          Re-open
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}

              {filteredAppointments.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                    <Calendar className="size-12 mx-auto mb-2 opacity-20" />
                    <p className="text-sm">
                      {searchTerm || filterStatus !== "all" 
                        ? "No appointments match your filters" 
                        : "No appointments yet"}
                    </p>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-3 p-4">
          {filteredAppointments.map((appointment: any) => {
            const disabled = updateAppointmentMutation.isPending;

            return (
              <div 
                key={appointment.id}
                className="border rounded-xl p-4 space-y-3 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate">{appointment.patientName}</div>
                    <div className="text-xs text-muted-foreground truncate">{appointment.patientEmail}</div>
                  </div>
                  {getStatusBadge(appointment.status)}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <div className="text-muted-foreground">Doctor</div>
                    <div className="font-medium truncate">{appointment.doctorName}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Date</div>
                    <div className="font-medium">{new Date(appointment.date).toLocaleDateString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Time</div>
                    <div className="font-medium">{appointment.time}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Reason</div>
                    <div className="font-medium truncate">{appointment.reason}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setStatus(appointment.id, "CONFIRMED")}
                    disabled={disabled || appointment.status === "COMPLETED"}
                    className="flex-1 text-xs"
                  >
                    <CheckCircle2 className="size-3 mr-1" />
                    Confirm
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setStatus(appointment.id, "COMPLETED")}
                    disabled={disabled || appointment.status === "CANCELLED"}
                    className="flex-1 text-xs"
                  >
                    <CheckCircle2 className="size-3 mr-1" />
                    Complete
                  </Button>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setStatus(appointment.id, "CANCELLED")}
                    disabled={disabled || appointment.status === "COMPLETED"}
                    className="flex-1 text-xs"
                  >
                    <XCircle className="size-3 mr-1" />
                    Cancel
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setStatus(appointment.id, "CONFIRMED")}
                    disabled={
                      disabled ||
                      !["CANCELLED", "PENDING"].includes(appointment.status)
                    }
                    className="flex-1 text-xs"
                  >
                    <RotateCcw className="size-3 mr-1" />
                    Re-open
                  </Button>
                </div>
              </div>
            );
          })}

          {filteredAppointments.length === 0 && (
            <div className="text-center py-10 text-muted-foreground">
              <Calendar className="size-12 mx-auto mb-2 opacity-20" />
              <p className="text-sm">
                {searchTerm || filterStatus !== "all" 
                  ? "No appointments match your filters" 
                  : "No appointments yet"}
              </p>
            </div>
          )}
        </div>

        <div className="mt-3 text-xs text-muted-foreground px-4 sm:px-0">
          Tip: Use actions to confirm, complete, or cancel appointments. Completed appointments
          should not be edited.
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentAppointments;