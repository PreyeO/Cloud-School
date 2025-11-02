"use client";

import { useProfile } from "@/hooks/useProfile";

export function useSubscriptionStatus() {
  const { data: profile, isLoading } = useProfile();

  // The only truth: applicationFeePaid
  const hasPaid = profile?.data?.applicationFeePaid === true;

  return {
    profile,
    isLoading,
    hasPaid,
  };
}
