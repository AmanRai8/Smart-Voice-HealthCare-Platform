import React from "react";
import { Card, CardContent } from "../ui/card";
import { Calendar, Clock, UserCheck, Users, TrendingUp, Activity } from "lucide-react";

interface AdminStatsProps {
  totalDoctors: number;
  activeDoctors: number;
  totalAppointments: number;
  completedAppointments: number;
}

function AdminStats({
  totalDoctors,
  activeDoctors,
  totalAppointments,
  completedAppointments,
}: AdminStatsProps) {
  const completionRate = totalAppointments > 0 
    ? ((completedAppointments / totalAppointments) * 100).toFixed(1)
    : 0;

  const activeRate = totalDoctors > 0
    ? ((activeDoctors / totalDoctors) * 100).toFixed(1)
    : 0;

  const stats = [
    {
      icon: Users,
      value: totalDoctors,
      label: "Total Doctors",
      subtext: `${activeRate}% active`,
      gradient: "from-blue-500/20 to-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: UserCheck,
      value: activeDoctors,
      label: "Active Doctors",
      subtext: "Currently available",
      gradient: "from-green-500/20 to-green-500/10",
      iconColor: "text-green-600",
    },
    {
      icon: Calendar,
      value: totalAppointments,
      label: "Total Appointments",
      subtext: `${completionRate}% completed`,
      gradient: "from-purple-500/20 to-purple-500/10",
      iconColor: "text-purple-600",
    },
    {
      icon: Clock,
      value: completedAppointments,
      label: "Completed",
      subtext: "Successfully finished",
      gradient: "from-orange-500/20 to-orange-500/10",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card 
            key={index}
            className="border-2 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group overflow-hidden relative"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <CardContent className="p-4 sm:p-6 relative">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                  <Icon className={`size-5 sm:size-6 ${stat.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xl sm:text-2xl font-bold truncate">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium truncate">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground/70 mt-0.5 truncate">
                    {stat.subtext}
                  </div>
                </div>
              </div>

              {/* Progress indicator */}
              {index === 0 && totalDoctors > 0 && (
                <div className="mt-3 sm:mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Active ratio</span>
                    <span className="font-medium">{activeRate}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500"
                      style={{ width: `${activeRate}%` }}
                    />
                  </div>
                </div>
              )}

              {index === 2 && totalAppointments > 0 && (
                <div className="mt-3 sm:mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                    <span>Completion rate</span>
                    <span className="font-medium">{completionRate}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                      style={{ width: `${completionRate}%` }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default AdminStats;