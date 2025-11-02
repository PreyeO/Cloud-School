"use client";

import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { useRouter } from "next/navigation";
import { ResetPasswordFormValues, SigninResponse } from "@/types/auth";
import { AxiosError } from "axios";

export function useResetPassword() {
  const router = useRouter();

  return useMutation<
    SigninResponse,
    AxiosError<{ message?: string }>,
    ResetPasswordFormValues
  >({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      notify.success(data.message || "Password reset successfully");
      router.push("/signin");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to reset password";
      notify.error(message);
    },
  });
}
