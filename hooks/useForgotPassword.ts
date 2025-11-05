// hooks/useForgotPassword.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { useRouter } from "next/navigation";
import { ForgotPasswordFormValues } from "@/types/auth";
import { AxiosError } from "axios";
import { useAuthFlowStore } from "@/store/useAuthStore";

interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export function useForgotPassword() {
  const router = useRouter();
  const setEmail = useAuthFlowStore((s) => s.setEmail);

  return useMutation<
    ForgotPasswordResponse,
    AxiosError<{ message?: string }>,
    ForgotPasswordFormValues
  >({
    mutationFn: forgotPassword,
    onSuccess: (data, variables) => {
      notify.success(data.message || "OTP sent to your email");
      setEmail(variables.email);
      router.push("/verify-otp?type=reset");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to send reset email.";
      notify.error(message);
    },
  });
}
