// /hooks/useMarketFunnels.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getMarketFunnels } from "@/lib/api/auth";

export function useMarketFunnels() {
  return useQuery({
    queryKey: ["marketFunnels"],
    queryFn: getMarketFunnels,
    select: (data) => data.data.options || [],
  });
}
