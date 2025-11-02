"use client";

import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { useRouter } from "next/navigation";
import { ForgotPasswordFormValues, SigninResponse } from "@/types/auth";

import { AxiosError } from "axios";

export function useForgotPassword() {
  const router = useRouter();

  return useMutation<
    SigninResponse,
    AxiosError<{ message?: string }>,
    ForgotPasswordFormValues
  >({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      notify.success(data.message || "OTP sent to your email");
      router.push("/reset-password");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message || error.message || "Failed to send OTP";
      notify.error(message);
    },
  });
}
