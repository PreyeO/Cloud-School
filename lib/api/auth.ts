import { apiClient } from "./client";
import {
  SignUpFormValues,
  SignupResponse,
  SigninFormValues,
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
  UpdateDetailsFormValues,
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

export async function signinUser(data: SigninFormValues) {
  const response = await apiClient.post("/api/v1/auth/login", data);
  return response.data;
}

export async function verifyOtp(data: { token: string }) {
  const response = await apiClient.post("/api/v1/auth/verify-email", data);
  return response.data;
}

export async function forgotPassword(data: ForgotPasswordFormValues) {
  const response = await apiClient.post(
    "/api/tenant-auth/forgot-password",
    data
  );
  return response.data;
}

export async function resetPassword(data: ResetPasswordFormValues) {
  const response = await apiClient.post(
    "/api/tenant-auth/reset-password",
    data
  );
  return response.data;
}
export async function clearDb() {
  const response = await apiClient.delete("/api/v1/admin/users/clear");
  return response.data;
}
