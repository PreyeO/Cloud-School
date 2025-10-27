"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { paySchoolFees } from "@/lib/api/payment";
import { ApplicationFeeResponse, PaymentPlanType } from "@/types/payment";

export function usePaySchoolFees() {
  return useMutation<ApplicationFeeResponse, AxiosError, PaymentPlanType>({
    mutationFn: paySchoolFees,
    onSuccess: (data) => {
      const paymentUrl = data?.data?.paymentUrl;

      if (data?.success && paymentUrl) {
        toast.info("Redirecting to Paystack... 💳");
        window.location.href = paymentUrl; // same tab
      } else {
        toast.error(data?.message || "Payment initialization failed.");
      }
    },
    onError: (error) => {
      console.error("School Fees Payment Error:", error.response?.data);
      const message =
        (error.response?.data as { message?: string })?.message ||
        "Payment failed. Please try again.";
      toast.error(message);
    },
  });
}
