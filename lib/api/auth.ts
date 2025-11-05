import { apiClient } from "./client";
import {
  SignUpFormValues,
  SignupResponse,
  SigninFormValues,
  ForgotPasswordFormValues,
} from "@/types/auth";
import { AxiosResponse } from "axios";

// ✅ Explicitly type the AxiosResponse
export async function signupUser(
  data: SignUpFormValues
): Promise<SignupResponse> {
  const response: AxiosResponse<SignupResponse> = await apiClient.post(
    "/api/v1/auth/register",
    data
  );
  return response.data;
}

export async function signinUser(data: SigninFormValues & { role?: string }) {
  const url =
    data.role === "admin" ? "/api/v1/admin/auth/login" : "/api/v1/auth/login";

  const response = await apiClient.post(url, data);
  return response.data;
}

export async function verifyOtp(data: { token: string }) {
  const response = await apiClient.post("/api/v1/auth/verify-email", data);
  return response.data;
}

export async function forgotPassword(data: ForgotPasswordFormValues) {
  const response = await apiClient.post("api/v1/auth/forgot-password", data);
  return response.data;
}

export async function resetPassword(data: {
  token: string;
  newPassword: string;
  confirmNewPassword: string;
}) {
  const response = await apiClient.post("/api/v1/auth/reset-password", data);
  return response.data;
}
export async function resendVerification(data: { email: string }) {
  const response = await apiClient.post(
    "/api/v1/auth/resend-verification",
    data
  );
  return response.data;
}

export async function clearDb() {
  const response = await apiClient.delete("/api/v1/admin/users/clear");
  return response.data;
}

export async function getMarketFunnels() {
  const response = await apiClient.get("/api/v1/auth/options/how-did-you-hear");
  return response.data;
}
