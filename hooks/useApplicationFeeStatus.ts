"use client";

import { useQuery } from "@tanstack/react-query";
import { getApplicationFeeStatus } from "@/lib/api/payment";

export function useApplicationFeeStatus() {
  return useQuery({
    queryKey: ["application-fee-status"],
    queryFn: getApplicationFeeStatus,
    // refetchInterval: 10000,
  });
}
