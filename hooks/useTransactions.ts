"use client";

import { getMyTransactions } from "@/lib/api/payment";
import { useQuery } from "@tanstack/react-query";

export function useTransactions() {
  return useQuery({
    queryKey: ["my-transactions"],
    queryFn: getMyTransactions,
    staleTime: 1000 * 60 * 2, // cache for 2 mins
  });
}
