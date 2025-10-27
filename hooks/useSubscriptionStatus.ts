"use client";

import { useProfile } from "@/hooks/useProfile";
import { useApplicationFeeStatus } from "@/hooks/useApplicationFeeStatus";

export function useSubscriptionStatus() {
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: feeStatus, isLoading: feeLoading } = useApplicationFeeStatus();

  const hasPaid =
    feeStatus?.data?.hasPaid || profile?.data?.applicationFeePaid || false;

  const isPending =
    !profileLoading &&
    (!hasPaid || profile?.data?.subscription?.status === "pending");

  const isActive =
    !profileLoading &&
    (hasPaid || profile?.data?.subscription?.status === "active");

  return {
    profile,
    isLoading: profileLoading || feeLoading,
    isPending,
    isActive,
    hasPaid,
  };
}
