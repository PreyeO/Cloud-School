// hooks/useVerifyOtp.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { useRouter, useSearchParams } from "next/navigation";
import { VerifyOtpFormValues } from "@/types/auth";
import { AxiosError } from "axios";
import { useAuthFlowStore } from "@/store/useAuthStore";

interface VerifyOtpResponse {
  success: boolean;
  message: string;
}

export function useVerifyOtp() {
  const router = useRouter();
  const params = useSearchParams();
  const type = params.get("type");
  const { setOtp } = useAuthFlowStore();

  return useMutation<
    VerifyOtpResponse,
    AxiosError<{ message?: string }>,
    VerifyOtpFormValues
  >({
    mutationFn: async (values) => {
      const payload = { token: values.otp.join("") };

      // For signup flow — verify directly
      if (type !== "reset") {
        return await verifyOtp(payload);
      }

      // For reset flow — skip API call here
      return { success: true, message: "OTP captured successfully" };
    },
    onSuccess: (data, variables) => {
      const otp = variables.otp.join("");
      if (type === "reset") {
        setOtp(otp);
        router.push("/reset-password");
        return;
      }

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
