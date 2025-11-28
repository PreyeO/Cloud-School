"use client";

import { useSmartMutation } from "./useSmartMutation";
import { forgotPassword } from "@/lib/api/auth";
import { ForgotPasswordFormValues } from "@/types/auth";
import { AxiosError } from "axios";
import { useAuthFlowStore } from "@/store/useAuthStore";

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export function useForgotPassword() {
  const setEmail = useAuthFlowStore((s) => s.setEmail);

  return useSmartMutation<
    ForgotPasswordResponse,
    AxiosError<{ message?: string }>,
    ForgotPasswordFormValues
  >({
    mutationFn: forgotPassword,
    successMessage: "OTP sent to your email",
    redirectTo: "/verify-otp?type=reset",
    onSuccess: (_, variables) => {
      setEmail(variables.email);
    },
  });
}
