"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";
import { AppointmentStatus } from "@prisma/client";

function transformAppointment(appointment: any) {
  return {
    ...appointment,
    patientName: `${appointment.user.firstName || ""} ${
      appointment.user.lastName || ""
    }`.trim(),
    patientEmail: appointment.user.email,
    doctorName: appointment.doctor.name,
    doctorImageUrl: appointment.doctor.imageUrl || "",
    date: appointment.date.toISOString().split("T")[0],
  };
}

// Helper function to ensure user exists in database
async function ensureUserExists(clerkId: string) {
  try {
    // Get user info from Clerk
    const clerkUser = await currentUser();

    if (!clerkUser) throw new Error("Not authenticated");

    // Use upsert to create or update user atomically
    const user = await prisma.user.upsert({
      where: { clerkId: clerkUser.id },
      update: {
        // Update existing user with latest info from Clerk
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName || "",
        lastName: clerkUser.lastName || "",
        phone: clerkUser.phoneNumbers?.[0]?.phoneNumber || "",
      },
      create: {
        // Create new user if doesn't exist
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0].emailAddress,
        firstName: clerkUser.firstName || "",
        lastName: clerkUser.lastName || "",
        phone: clerkUser.phoneNumbers?.[0]?.phoneNumber || "",
        role: "USER",
      },
    });

    return user;
  } catch (error) {
    console.error("Error ensuring user exists:", error);
    throw error;
  }
}

export async function getAppointments() {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        doctor: { select: { name: true, imageUrl: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return appointments.map(transformAppointment);
  } catch (error) {
    console.log("Error fetching appointments:", error);
    throw new Error("Failed to fetch appointments");
  }
}

export async function getUserAppointments() {
  try {
    // get authenticated user from Clerk
    const { userId } = await auth();
    if (!userId) throw new Error("You must be logged in to view appointments");

    // Ensure user exists in database (auto-create if needed)
    const user = await ensureUserExists(userId);

    // Get current date and time for filtering
    const now = new Date();
    const currentDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );

    const appointments = await prisma.appointment.findMany({
      where: {
        userId: user.id,
       
      status: { in: ["PENDING", "CONFIRMED"] },
    
        date: {
          gte: currentDate,
        },
      },
      include: {
        user: { select: { firstName: true, lastName: true, email: true } },
        doctor: { select: { name: true, imageUrl: true } },
      },
      orderBy: [{ date: "asc" }, { time: "asc" }],
    });

    return appointments.map(transformAppointment);
  } catch (error) {
    console.error("Error fetching user appointments:", error);
    throw new Error("Failed to fetch user appointments");
  }
}

export async function getUserAppointmentStats() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("You must be authenticated");

    // Ensure user exists in database (auto-create if needed)
    const user = await ensureUserExists(userId);

    // these calls will run in parallel, instead of waiting each other
    const [totalCount, completedCount] = await Promise.all([
      prisma.appointment.count({
        where: { userId: user.id },
      }),
      prisma.appointment.count({
        where: {
          userId: user.id,
          status: "COMPLETED",
        },
      }),
    ]);

    return {
      totalAppointments: totalCount,
      completedAppointments: completedCount,
    };
  } catch (error) {
    console.error("Error fetching user appointment stats:", error);
    return { totalAppointments: 0, completedAppointments: 0 };
  }
}

export async function getBookedTimeSlots(doctorId: string, date: string) {
  try {
    const appointments = await prisma.appointment.findMany({
      where: {
        doctorId,
        date: new Date(date),
        status: {
          in: ["CONFIRMED", "COMPLETED"], // consider both confirmed and completed appointments as blocking
        },
      },
      select: { time: true },
    });

    return appointments.map((appointment) => appointment.time);
  } catch (error) {
    console.error("Error fetching booked time slots:", error);
    return []; // return empty array if there's an error
  }
}

interface BookAppointmentInput {
  doctorId: string;
  date: string;
  time: string;
  reason?: string;
}

export async function bookAppointment(input: BookAppointmentInput) {
  try {
    const { userId } = await auth();
    if (!userId)
      throw new Error("You must be logged in to book an appointment");

    if (!input.doctorId || !input.date || !input.time) {
      throw new Error("Doctor, date, and time are required");
    }

    // Ensure user exists in database (auto-create if needed)
    const user = await ensureUserExists(userId);

    const appointment = await prisma.appointment.create({
      data: {
        userId: user.id,
        doctorId: input.doctorId,
        date: new Date(input.date),
        time: input.time,
        reason: input.reason || "General consultation",
        status: "CONFIRMED",
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        doctor: { select: { name: true, imageUrl: true } },
      },
    });

    return transformAppointment(appointment);
  } catch (error) {
    console.error("Error booking appointment:", error);
    throw new Error("Failed to book appointment. Please try again later.");
  }
}

export async function updateAppointmentStatus(input: {
  id: string;
  status: AppointmentStatus;
}) {
  try {
    const appointment = await prisma.appointment.update({
      where: { id: input.id },
      data: { status: input.status },
    });

    return appointment;
  } catch (error) {
    console.error("Error updating appointment:", error);
    throw new Error("Failed to update appointment");
  }
}
export async function cancelAppointment(input: { id: string }) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("You must be logged in");

    const user = await ensureUserExists(userId);

    // Make sure the appointment belongs to the user (or user is admin)
    const appt = await prisma.appointment.findUnique({
      where: { id: input.id },
      select: { id: true, userId: true, status: true, date: true },
    });

    if (!appt) throw new Error("Appointment not found");

    const isAdmin = user.role === "ADMIN";
    const isOwner = appt.userId === user.id;
    if (!isAdmin && !isOwner) throw new Error("Not allowed");

    // prevent cancelling completed appointments
    if (appt.status === "COMPLETED") {
      throw new Error("Completed appointments cannot be cancelled");
    }

    // prevent cancelling past appointments (optional)
    if (appt.date < new Date()) {
      throw new Error("Past appointments cannot be cancelled");
    }

    const updated = await prisma.appointment.update({
      where: { id: input.id },
      data: { status: "CANCELLED" },
    });

    return updated;
  } catch (error) {
    console.error("Error cancelling appointment:", error);
    throw new Error("Failed to cancel appointment");
  }
}

export async function rescheduleAppointment(input: {
  id: string;
  date: string; // yyyy-mm-dd
  time: string;
}) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("You must be logged in");

    const user = await ensureUserExists(userId);

    const appt = await prisma.appointment.findUnique({
      where: { id: input.id },
      select: { id: true, userId: true, status: true, doctorId: true },
    });

    if (!appt) throw new Error("Appointment not found");

    const isAdmin = user.role === "ADMIN";
    const isOwner = appt.userId === user.id;
    if (!isAdmin && !isOwner) throw new Error("Not allowed");

    if (appt.status === "COMPLETED") {
      throw new Error("Completed appointments cannot be rescheduled");
    }
    if (appt.status === "CANCELLED") {
      throw new Error("Cancelled appointments cannot be rescheduled");
    }

    // Optional: prevent choosing already-booked timeslot
    const booked = await prisma.appointment.findFirst({
      where: {
        doctorId: appt.doctorId,
        date: new Date(input.date),
        time: input.time,
        status: { in: ["CONFIRMED", "COMPLETED"] },
        NOT: { id: input.id },
      },
      select: { id: true },
    });

    if (booked) throw new Error("This time slot is already booked");

    const updated = await prisma.appointment.update({
      where: { id: input.id },
      data: {
        date: new Date(input.date),
        time: input.time,
        status: "CONFIRMED",
      },
    });

    return updated;
  } catch (error) {
    console.error("Error rescheduling appointment:", error);
    throw new Error("Failed to reschedule appointment");
  }
}
