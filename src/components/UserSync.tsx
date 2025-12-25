"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { syncUserAction } from "@/lib/actions/users";

export default function UserSync() {
  const { isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const handleUserSync = async () => {
      if (isLoaded && isSignedIn) {
        try {
          await syncUserAction(); // Call server action
        } catch (error) {
          console.error("Failed to sync user:", error);
        }
      }
    };

    handleUserSync();
  }, [isLoaded, isSignedIn]);

  return null;
}
