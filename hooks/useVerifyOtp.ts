"use client";

import { useSmartMutation } from "./useSmartMutation";
import { verifyOtp } from "@/lib/api/auth";
import { useAuthFlowStore } from "@/store/useAuthStore";
import { useSearchParams } from "next/navigation";
import { AxiosError } from "axios";
import { VerifyOtpFormValues } from "@/types/auth";

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
}

export function useVerifyOtp() {
  const params = useSearchParams();
  const type = params.get("type");
  const { setOtp } = useAuthFlowStore();

  const redirectTo = type === "reset" ? "/reset-password" : "/signin";

  return useSmartMutation<
    VerifyOtpResponse,
    AxiosError<{ message?: string }>,
    VerifyOtpFormValues
  >({
    mutationFn: async (values) => {
      const payload = { token: values.otp.join("") };

      if (type !== "reset") {
        return await verifyOtp(payload);
      }

      return { success: true, message: "OTP captured successfully" };
    },
    successMessage:
      type !== "reset"
        ? "Email verified successfully"
        : "OTP captured successfully",
    redirectTo,
    onSuccess: (data, variables) => {
      if (type === "reset") {
        const otp = variables.otp.join("");
        setOtp(otp);
      }
    },
  });
}
