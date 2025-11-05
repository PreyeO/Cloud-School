"use client";

import { useMutation } from "@tanstack/react-query";
import { resendVerification } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { AxiosError } from "axios";

interface ResendVerificationResponse {
  success: boolean;
  message: string;
}

export function useResendVerification() {
  return useMutation<
    ResendVerificationResponse,
    AxiosError<{ message?: string }>,
    { email: string }
  >({
    mutationFn: async (data) => await resendVerification(data),
    onSuccess: (data) => {
      notify.success(data.message || "Verification email resent successfully");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to resend verification";
      notify.error(message);
    },
  });
}
