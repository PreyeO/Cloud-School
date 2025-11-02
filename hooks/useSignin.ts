"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { signinUser } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { SigninFormValues, SigninResponse } from "@/types/auth";
import { AxiosError } from "axios";
import { useAuthStore } from "@/store/useAuthStore";

export function useSignin(role?: "admin" | "student") {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation<
    SigninResponse,
    AxiosError<{ message?: string }>,
    SigninFormValues
  >({
    mutationFn: (data) => signinUser({ ...data, role }),
    onSuccess: (data) => {
      setAuth(data.data);
      notify.success(data.message || "Signin successful");

      const userRole =
        data.data.user.role === "super_admin" ? "admin" : data.data.user.role;

      if (userRole === "admin") router.push("/admin");
      else router.push("/student");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Signin failed, please try again.";
      notify.error(message);
    },
  });
}
