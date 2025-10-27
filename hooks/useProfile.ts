"use client";

import { getUserProfile } from "@/lib/api/student";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: getUserProfile,
  });
}
