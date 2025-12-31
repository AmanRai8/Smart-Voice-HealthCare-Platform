export const dynamic = "force-dynamic";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

import Navbar from "@/components/Navbar";

async function AdminPage() {
  const clerkUser = await currentUser();

  if (!clerkUser) redirect("/");

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  });

  if (!dbUser || dbUser.role !== "ADMIN") redirect("/");

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default AdminPage;
