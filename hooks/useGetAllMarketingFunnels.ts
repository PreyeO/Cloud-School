"use client";

import { getAllMarketingFunnel } from "@/lib/api/admin";
import { useQuery } from "@tanstack/react-query";

export function useGetAllMarketingFunnel() {
  return useQuery({
    queryKey: ["marketingFunnel"],
    queryFn: getAllMarketingFunnel,
  });
}
