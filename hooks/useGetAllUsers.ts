"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/lib/api/admin";

export function useGetAllUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    select: (data) => data?.data || [],
  });
}
