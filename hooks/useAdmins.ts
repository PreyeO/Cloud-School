// hooks/useAdmins.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllAdmins } from "@/lib/api/admin";
import { User } from "@/types/auth";

interface GetAllAdminsResponse {
  success: boolean;
  message: string;
  data: {
    admins: User[];
    total: number;
    pages: number;
  };
}

export function useAdmins() {
  return useQuery<GetAllAdminsResponse, Error>({
    queryKey: ["admins"],
    queryFn: getAllAdmins,
  });
}
