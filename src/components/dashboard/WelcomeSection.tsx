import Image from "next/image";

import { currentUser } from "@clerk/nextjs/server";

export default async function WelcomeSection() {
  const user = await currentUser();

  return (
    <div className="relative z-10 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20 mb-12 overflow-hidden">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <div className="size-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-primary">
            Online & Ready
          </span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Good{" "}
            {new Date().getHours() < 12
              ? "morning"
              : new Date().getHours() < 18
              ? "afternoon"
              : "evening"}
            , {user?.firstName}!
          </h1>
          <p className="text-muted-foreground">
            Your personal AI assistant is ready to help you maintain perfect
            health.
          </p>
        </div>
      </div>

  <div className="lg:flex hidden items-center justify-center size-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full overflow-hidden">
  {user?.imageUrl ? (
    <Image
      src={user.imageUrl}
      alt={user.fullName || "User"}
      width={128}
      height={128}
      className="w-full h-full object-cover"
    />
  ) : (
    <span className="text-6xl" role="img" aria-label="User Profile">
      👤
    </span>
  )}
</div>
    </div>
  );
}
