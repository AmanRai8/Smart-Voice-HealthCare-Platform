"use client";

import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { Activity, CheckCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export default function Status() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Update current time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("en-US", {
          dateStyle: "full",
          timeStyle: "long",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Service status data
  const services = [
    {
      name: "Platform API",
      status: "operational",
      uptime: "99.98%",
      latency: "45ms",
    },
    {
      name: "AI Health Assistant",
      status: "operational",
      uptime: "99.95%",
      latency: "120ms",
    },
    {
      name: "Appointment Booking",
      status: "operational",
      uptime: "99.99%",
      latency: "38ms",
    },
    {
      name: "Payment Processing",
      status: "operational",
      uptime: "99.97%",
      latency: "52ms",
    },
    {
      name: "Email Notifications",
      status: "operational",
      uptime: "99.96%",
      latency: "85ms",
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.99%",
      latency: "28ms",
    },
  ];

  // Recent incidents (example data)
  const incidents = [
    {
      date: "Feb 8, 2026",
      title: "Scheduled Maintenance - Database Upgrade",
      status: "Resolved",
      description:
        "We performed scheduled maintenance to upgrade our database infrastructure. All services were restored within the planned maintenance window.",
      duration: "2 hours",
    },
    {
      date: "Jan 30, 2026",
      title: "Partial Service Degradation - Payment Gateway",
      status: "Resolved",
      description:
        "Some users experienced delays in payment processing due to third-party gateway issues. The issue was resolved by our payment provider.",
      duration: "45 minutes",
    },
    {
      date: "Jan 15, 2026",
      title: "Email Delivery Delays",
      status: "Resolved",
      description:
        "Confirmation emails experienced delays of up to 10 minutes. Email service has been restored to normal operation.",
      duration: "1.5 hours",
    },
  ];

  // Maintenance schedule
  const upcomingMaintenance = [
    {
      date: "Feb 15, 2026",
      time: "2:00 AM - 4:00 AM NPT",
      title: "Infrastructure Upgrade",
      description:
        "We will be upgrading our server infrastructure to improve performance. The platform may be briefly unavailable during this window.",
      impact: "Brief downtime expected",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-500";
      case "degraded":
        return "text-yellow-500";
      case "outage":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-500/10 border-green-500/20";
      case "degraded":
        return "bg-yellow-500/10 border-yellow-500/20";
      case "outage":
        return "bg-red-500/10 border-red-500/20";
      default:
        return "bg-gray-500/10 border-gray-500/20";
    }
  };

  return (
    <>
    <Header />   <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Activity className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            System Status
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
            Real-time status and performance metrics for all our services
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{currentTime}</span>
          </div>
        </div>

        {/* Overall Status Banner */}
        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-3xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold">All Systems Operational</h2>
          </div>
          <p className="text-muted-foreground">
            All services are running smoothly with no reported issues
          </p>
        </div>

        {/* Service Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Status</h2>
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl p-6 border border-border/50"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-full ${getStatusBg(
                        service.status
                      )}`}
                    >
                      <CheckCircle
                        className={`h-5 w-5 ${getStatusColor(service.status)}`}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground capitalize">
                        {service.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-muted-foreground">Uptime (30d)</p>
                      <p className="font-semibold">{service.uptime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg. Latency</p>
                      <p className="font-semibold">{service.latency}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Maintenance */}
        {upcomingMaintenance.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Scheduled Maintenance</h2>
            <div className="space-y-4">
              {upcomingMaintenance.map((maintenance, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {maintenance.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {maintenance.date} • {maintenance.time}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                      Scheduled
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    {maintenance.description}
                  </p>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Expected Impact: {maintenance.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Incidents */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Incident History</h2>
          <div className="space-y-4">
            {incidents.map((incident, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-2xl p-6 border border-border/50"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {incident.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {incident.date} • Duration: {incident.duration}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                    {incident.status}
                  </span>
                </div>
                <p className="text-muted-foreground">{incident.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Want to receive notifications about service status changes and
            planned maintenance? Subscribe to our status updates.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition"
          >
            Subscribe to Updates
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            This page is automatically updated every 60 seconds. Last checked:{" "}
            {currentTime}
          </p>
          <p className="mt-2">
            For urgent issues, please contact our support team at{" "}
            <a
              href="mailto:amanrai2002acr@gmail.com"
              className="text-primary hover:underline"
            >
              amanrai2002acr@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
    <Footer /></>
 
  );
}