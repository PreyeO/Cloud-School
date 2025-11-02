import { ApplicationFeeResponse, PaymentPlanType } from "@/types/payment";
import { apiClient } from "./client";

export async function payApplicationFee(): Promise<ApplicationFeeResponse> {
  const response = await apiClient.post<ApplicationFeeResponse>(
    "/api/v1/application-fee/pay"
  );
  return response.data;
}

export async function getApplicationFeeStatus() {
  const response = await apiClient.get("/api/v1/application-fee/status");
  return response.data;
}

export async function paySchoolFees(
  planType: PaymentPlanType
): Promise<ApplicationFeeResponse> {
  const response = await apiClient.post<ApplicationFeeResponse>(
    "/api/v1/subscriptions/",
    { planType } // 👈 send plan type in body
  );
  return response.data;
}
export async function getMyTransactions() {
  const response = await apiClient.get(
    "/api/v1/subscriptions/transactions/my-transactions"
  );
  return response.data;
}
