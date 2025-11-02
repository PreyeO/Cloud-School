"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/lib/api/admin";

export function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
    select: (data) => data?.data,
  });
}
