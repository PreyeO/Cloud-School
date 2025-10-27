import axios from "axios";
import { toast } from "sonner";
import { useAuthStore } from "@/store/useAuthStore"; // ✅ import store

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

// ✅ Attach token to every request
apiClient.interceptors.request.use(
  (config) => {
    const tokens = useAuthStore.getState().tokens;

    if (tokens?.accessToken) {
      config.headers.Authorization = `Bearer ${tokens.accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Global response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message || error.message || "Something went wrong";

    toast.error(message); // auto-toast errors
    return Promise.reject(error);
  }
);
