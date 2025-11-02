"use client";

import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { useRouter } from "next/navigation";
import { VerifyOtpFormValues } from "@/types/auth";
import { AxiosError } from "axios";

interface VerifyOtpResponse {
  success: boolean;
  message: string;
}

export function useVerifyOtp() {
  const router = useRouter();

  return useMutation<
    VerifyOtpResponse,
    AxiosError<{ message?: string }>,
    VerifyOtpFormValues
  >({
    mutationFn: async (values) => {
      const payload = { token: values.otp.join("") };
      return await verifyOtp(payload);
    },
    onSuccess: (data) => {
      notify.success(data.message || "Email verified successfully");
      router.push("/signin");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message || error.message || "Verification failed";
      notify.error(message);
    },
  });
}
