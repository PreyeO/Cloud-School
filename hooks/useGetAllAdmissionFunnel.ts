"use client";

import { getAllAdmissionFunnel } from "@/lib/api/admin";
import { useQuery } from "@tanstack/react-query";

export function useGetAllAdmissionFunnel() {
  return useQuery({
    queryKey: ["sdmissionFunnel"],
    queryFn: getAllAdmissionFunnel,
  });
}
