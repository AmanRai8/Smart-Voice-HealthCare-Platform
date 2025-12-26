export const dynamic = "force-dynamic";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import AdminDashboardClient from "./AdminDashboardClient";

async function AdminPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/");

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  });

  if (!dbUser || dbUser.role !== "ADMIN") redirect("/");

  return (
    <div className="p-6">
      <SignedIn>
        <AdminDashboardClient />
        <SignOutButton>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Sign Out
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}

export default AdminPage;
