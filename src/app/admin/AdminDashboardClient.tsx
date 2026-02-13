"use client";

import AdminAnalytics from "@/components/admin/AdminAnalytics";
import AdminStats from "@/components/admin/AdminStats";
import DoctorsManagement from "@/components/admin/DoctorsManagement";
import RecentAppointments from "@/components/admin/RecentAppointments";
import Navbar from "@/components/Navbar";
import { useGetAppointments } from "@/hooks/use-appointments";
import { useGetDoctors } from "@/hooks/use-doctors";
import { useUser } from "@clerk/nextjs";
import { SettingsIcon } from "lucide-react";

function AdminDashboardClient() {
  const { user } = useUser();
  const { data: doctors = [], isLoading: doctorsLoading } = useGetDoctors();
  const { data: appointments = [], isLoading: appointmentsLoading } =
    useGetAppointments();

  // calculated stats from real data
  const stats = {
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter((doc) => doc.isActive).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter(
      (app) => app.status === "COMPLETED"
    ).length,
  };

  if (doctorsLoading || appointmentsLoading) return <LoadingUI />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pt-20 sm:pt-24">
        {/* ADMIN WELCOME SECTION */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-primary/20 gap-4 lg:gap-0">
          <div className="space-y-3 sm:space-y-4 flex-1">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-primary">
                Admin Dashboard
              </span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                Welcome back, {user?.firstName || "Admin"}!
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground">
                Manage doctors, oversee appointments, and monitor your health
                practice performance.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="w-24 h-24 xl:w-32 xl:h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <SettingsIcon className="w-12 h-12 xl:w-16 xl:h-16 text-primary" />
            </div>
          </div>
        </div>

        <AdminStats
          totalDoctors={stats.totalDoctors}
          activeDoctors={stats.activeDoctors}
          totalAppointments={stats.totalAppointments}
          completedAppointments={stats.completedAppointments}
        />

        <div className="mt-6 sm:mt-8 mb-6 sm:mb-8">
          <AdminAnalytics />
        </div>

        <DoctorsManagement />

        <RecentAppointments />
      </div>
    </div>
  );
}

export default AdminDashboardClient;

function LoadingUI() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pt-20 sm:pt-24">
        <div className="flex items-center justify-center h-64 sm:h-96">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3 sm:mb-4" />
            <p className="text-sm sm:text-base text-muted-foreground">Loading dashboard...</p>
          </div>
        </div>
      </div>
    </div>
  );
}