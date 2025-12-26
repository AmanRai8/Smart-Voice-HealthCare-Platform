// lib/actions/users.ts
"use server";

import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function syncUserAction() {
  try {
    const user = await currentUser();
    if (!user) return null;

    const email = user.emailAddresses?.[0]?.emailAddress ?? null;

    if (!email) {
      throw new Error("Clerk user has no email address");
    }

    /**
     * Upsert user by email (unique)
     * - prevents duplicate email errors
     * - updates clerkId if user already exists
     */
    const dbUser = await prisma.user.upsert({
      where: {
        email,
      },
      update: {
        clerkId: user.id,
        firstName: user.firstName ?? null,
        lastName: user.lastName ?? null,
        phone: user.phoneNumbers?.[0]?.phoneNumber ?? null,
      },
      create: {
        clerkId: user.id,
        email,
        firstName: user.firstName ?? null,
        lastName: user.lastName ?? null,
        phone: user.phoneNumbers?.[0]?.phoneNumber ?? null,
      },
    });

    return dbUser;
  } catch (error) {
    console.error("❌ Error in syncUserAction:", error);
    throw error;
  }
}
