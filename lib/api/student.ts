import { UpdateDetailsFormValues } from "@/types/auth";
import { apiClient } from "./client";

export async function updateDetails(data: UpdateDetailsFormValues) {
  const response = await apiClient.put("/api/v1/auth/update-details", data);
  return response.data;
}

export async function getUserProfile() {
  const response = await apiClient.get("/api/v1/auth/profile");
  return response.data;
}
