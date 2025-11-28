"use client";

import { useSmartMutation } from "./useSmartMutation";
import { signinUser } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { SigninFormValues, SigninResponse } from "@/types/auth";
import { AxiosError } from "axios";
import { useAuthStore } from "@/store/useAuthStore";

export function useSignin(role?: "admin" | "student") {
  const setAuth = useAuthStore((state) => state.setAuth);

  // Determine redirect path based on role
  const redirectPath =
    role === "admin" ? "/admin" : role === "student" ? "/student" : "/";

  return useSmartMutation<
    SigninResponse,
    AxiosError<{ message?: string }>,
    SigninFormValues
  >({
    mutationFn: (data) => signinUser({ ...data, role }),

    successMessage: "Signin successful",

    redirectTo: redirectPath,

    onSuccess: (data) => {
      setAuth(data.data);
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
