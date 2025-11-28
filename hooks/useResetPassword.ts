"use client";

import { useSmartMutation } from "./useSmartMutation";
import { resetPassword } from "@/lib/api/auth";
import { ResetPasswordFormValues } from "@/types/auth";
import { AxiosError } from "axios";
import { useAuthFlowStore } from "@/store/useAuthStore";
import { notify } from "@/lib/notify";

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

export function useResetPassword() {
  const { otp, clearFlow } = useAuthFlowStore();

  return useSmartMutation<
    ResetPasswordResponse,
    AxiosError<{ message?: string }>,
    ResetPasswordFormValues
  >({
    mutationFn: async (values) => {
      if (!otp) {
        notify.error("OTP missing. Please restart the reset process.");
        throw new Error("OTP missing");
      }

      return resetPassword({
        token: otp,
        newPassword: values.password,
        confirmNewPassword: values.confirmPassword,
      });
    },
    successMessage: "Password reset successful",
    redirectTo: "/signin",
    onSuccess: () => {
      clearFlow();
    },
  });
}
