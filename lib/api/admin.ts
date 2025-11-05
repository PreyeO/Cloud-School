import { CreateAdminFormValues, SignupResponse } from "@/types/auth";
import { apiClient } from "./client";

export async function getAllUsers() {
  const response = await apiClient.get("/api/v1/admin/users");
  return response.data;
}

export async function getAllPayment() {
  const response = await apiClient.get("/api/v1/subscriptions/stats/payments");
  return response.data;
}

export async function getAllMarketingFunnel() {
  const response = await apiClient.get("/api/v1/admin/stats/marketing-funnel");
  return response.data;
}

export async function getAllAdmissionFunnel() {
  const response = await apiClient.get("/api/v1/admin/users/stats/status");
  return response.data;
}

export async function createAdmin(data: CreateAdminFormValues) {
  const response = await apiClient.post<SignupResponse>("/api/v1/admin/", data);
  return response.data;
}

export async function getAllAdmins() {
  const response = await apiClient.get("/api/v1/admin/");
  return response.data;
}

// export async function toggleAdminStatus(
//   adminId: string,
//   status: "active" | "inactive"
// ) {
//   const response = await apiClient.patch(`/api/v1/admin/${adminId}/status`, {
//     status,
//   });
//   return response.data;
// }

// export async function removeAdmin(adminId: string) {
//   const response = await apiClient.delete(`/api/v1/admin/${adminId}`);
//   return response.data;
// }

export async function getAllUsersDetails(filters?: {
  status?: string;
  howDidYouHearAboutUs?: string;
}) {
  const params = new URLSearchParams();

  if (filters?.status && filters.status !== "all") {
    params.append("status", filters.status.toLowerCase());
  }

  if (filters?.howDidYouHearAboutUs && filters.howDidYouHearAboutUs !== "all") {
    params.append(
      "howDidYouHearAboutUs",
      filters.howDidYouHearAboutUs.toLowerCase()
    );
  }

  const url = `/api/v1/admin/users?${params.toString()}`;
  const response = await apiClient.get(url);
  return response.data;
}

export async function getUserById(id: string) {
  const response = await apiClient.get(`/api/v1/admin/users/${id}`);
  return response.data;
}
