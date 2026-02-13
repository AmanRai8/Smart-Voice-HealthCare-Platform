"use client";

import { useQuery } from "@tanstack/react-query";
import { getAdminAnalytics } from "@/lib/actions/admin-analytics";

export function useAdminAnalytics() {
  return useQuery({
    queryKey: ["adminAnalytics"],
    queryFn: getAdminAnalytics,
  });
}
