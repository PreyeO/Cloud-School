"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { payApplicationFee } from "@/lib/api/payment";
import { ApplicationFeeResponse } from "@/types/payment";

export function usePayApplicationFee() {
  return useMutation<ApplicationFeeResponse, AxiosError>({
    mutationFn: payApplicationFee,
    onSuccess: (data) => {
      const paymentUrl = data?.data?.paymentUrl;

      if (data?.success && paymentUrl) {
        toast.info("Redirecting to secure Paystack page...");

        // ✅ Redirect user in the same tab (not new tab)
        window.location.href = paymentUrl;

        // OR window.location.assign(paymentUrl);
        // Both work, assign() is slightly safer for preventing back navigation issues
      } else {
        toast.error(data.message || "Payment initialization failed.");
      }
    },
    onError: (error) => {
      const message =
        (error.response?.data as { message?: string })?.message ||
        "Payment failed. Please try again.";
      toast.error(message);
    },
  });
}
