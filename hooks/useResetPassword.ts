// hooks/useResetPassword.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { useRouter } from "next/navigation";
import { ResetPasswordFormValues } from "@/types/auth";
import { AxiosError } from "axios";
import { useAuthFlowStore } from "@/store/useAuthStore";

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

export function useResetPassword() {
  const router = useRouter();
  const { otp, clearFlow } = useAuthFlowStore();

  return useMutation<
    ResetPasswordResponse,
    AxiosError<{ message?: string }>,
    ResetPasswordFormValues
  >({
    mutationFn: async (values) => {
      if (!otp) {
        notify.error("OTP missing. Please restart the reset process.");
        router.push("/forgot-password");
        return;
      }

      const payload = {
        token: otp,
        newPassword: values.password,
        confirmNewPassword: values.confirmPassword,
      };
      return await resetPassword(payload);
    },
    onSuccess: (data) => {
      notify.success(data.message || "Password reset successful");
      clearFlow();
      router.push("/signin");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Password reset failed.";
      notify.error(message);
    },
  });
}
