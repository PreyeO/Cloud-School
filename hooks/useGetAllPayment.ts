"use client";

import { getAllPayment } from "@/lib/api/admin";
import { useQuery } from "@tanstack/react-query";

export function useGetAllPayments() {
  return useQuery({
    queryKey: ["payments"],
    queryFn: getAllPayment,
  });
}
