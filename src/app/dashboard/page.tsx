// /dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";

export default async function DashboardPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/");

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  });

  if (dbUser?.role === "ADMIN") redirect("/admin");

  return (
    <div>
      <Navbar />
      DASHBOARD
    </div>
  );
}
