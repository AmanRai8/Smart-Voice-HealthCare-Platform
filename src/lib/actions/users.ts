// lib/actions/users.ts
"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function syncUserAction() {
  try {
    // Get the currently signed-in Clerk user
    const user = await currentUser();
    if (!user) return null;

    // Check if user already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });
    if (existingUser) return existingUser;

    // Create a new user in the database
    const dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName: user.firstName ?? null,
        lastName: user.lastName ?? null,
        email: user.emailAddresses[0]?.emailAddress ?? null,
        phone: user.phoneNumbers[0]?.phoneNumber ?? null,
      },
    });

    return dbUser;
  } catch (error) {
    console.error("Error in syncUserAction:", error);
    throw error; // Optional: rethrow so client can handle it
  }
}
