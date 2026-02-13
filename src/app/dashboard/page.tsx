// /dashboard/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import MainActions from "@/components/dashboard/MainActions";
import ActivityOverview from "@/components/dashboard/ActivityOverview";

export default async function DashboardPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/");

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  });

  if (dbUser?.role === "ADMIN") redirect("/admin");

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pt-20 sm:pt-24">
        <WelcomeSection />
        <MainActions />
        <ActivityOverview />
      </div>
    </>
  );
}