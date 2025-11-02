"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAdmin } from "@/lib/api/admin";
import { notify } from "@/lib/notify";
import { CreateAdminFormValues, SignupResponse } from "@/types/auth";
import { AxiosError } from "axios";

export function useCreateAdmin() {
  const queryClient = useQueryClient();

  return useMutation<
    SignupResponse,
    AxiosError<{ message?: string }>,
    CreateAdminFormValues
  >({
    mutationFn: (data) => createAdmin(data),
    onSuccess: (data) => {
      notify.success(data.message || "Admin created successfully");
      queryClient.invalidateQueries({ queryKey: ["admins"] }); // ✅ fixed TS
    },
    onError: (error) => {
      notify.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to create admin"
      );
    },
  });
}
