"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { subDays, startOfDay, endOfDay } from "date-fns";

export async function getAdminAnalytics() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Ensure admin
  const dbUser = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!dbUser || dbUser.role !== "ADMIN") throw new Error("Forbidden");

  const today = new Date();
  const from = startOfDay(subDays(today, 6)); // last 7 days including today
  const to = endOfDay(today);

  // Counts
  const [totalUsers, totalDoctors, activeDoctors, totalAppointments] =
    await Promise.all([
      prisma.user.count(),
      prisma.doctor.count(),
      prisma.doctor.count({ where: { isActive: true } }),
      prisma.appointment.count(),
    ]);

  // Status breakdown
  const statusCountsRaw = await prisma.appointment.groupBy({
    by: ["status"],
    _count: { id: true },
  });

  const statusCounts = statusCountsRaw.reduce<Record<string, number>>(
    (acc, row) => {
      acc[row.status] = row._count.id;
      return acc;
    },
    {}
  );

  // Last 7 days trend
  const dailyRaw = await prisma.appointment.groupBy({
    by: ["date"],
    where: { date: { gte: from, lte: to } },
    _count: { id: true },
    orderBy: { date: "asc" },
  });

  // Normalize by day (in case some days have zero appointments)
  const daily = Array.from({ length: 7 }).map((_, i) => {
    const day = startOfDay(subDays(today, 6 - i));
    const match = dailyRaw.find(
      (x) => startOfDay(x.date).getTime() === day.getTime()
    );
    return {
      day: day.toISOString().slice(0, 10),
      count: match?._count?.id ?? 0,
    };
  });

  // Top doctors by bookings (all time)
  const topDoctorsRaw = await prisma.appointment.groupBy({
    by: ["doctorId"],
    _count: { id: true },
    orderBy: { _count: { id: "desc" } },
    take: 5,
  });

  const doctorIds = topDoctorsRaw.map((x) => x.doctorId);

  const doctors = await prisma.doctor.findMany({
    where: { id: { in: doctorIds } },
    select: { id: true, name: true, speciality: true, isActive: true },
  });

  const topDoctors = topDoctorsRaw.map((row) => {
    const doc = doctors.find((d) => d.id === row.doctorId);
    return {
      doctorId: row.doctorId,
      name: doc?.name ?? "Unknown",
      speciality: doc?.speciality ?? "—",
      isActive: doc?.isActive ?? false,
      count: row._count.id,
    };
  });

  return {
    totals: {
      totalUsers,
      totalDoctors,
      activeDoctors,
      totalAppointments,
    },
    statusCounts: {
      PENDING: statusCounts["PENDING"] ?? 0,
      CONFIRMED: statusCounts["CONFIRMED"] ?? 0,
      COMPLETED: statusCounts["COMPLETED"] ?? 0,
      CANCELLED: statusCounts["CANCELLED"] ?? 0,
    },
    daily, // [{ day: "YYYY-MM-DD", count: number }]
    topDoctors,
  };
}
