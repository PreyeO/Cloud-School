"use client";

import { getAllUsersDetails } from "@/lib/api/admin";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export function useUsers(status: string, howDidYouHearAboutUs: string) {
  return useQuery({
    queryKey: ["users", status, howDidYouHearAboutUs],
    queryFn: () => getAllUsersDetails({ status, howDidYouHearAboutUs }),
    placeholderData: keepPreviousData,
  });
}
