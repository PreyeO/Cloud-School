"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { signinUser } from "@/lib/api/auth";
import { notify } from "@/lib/notify";

import { SigninFormValues, SigninResponse } from "@/types/auth";
import { AxiosError } from "axios";
import { useAuthStore } from "@/store/useAuthStore";

export function useSignin() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation<
    SigninResponse,
    AxiosError<{ message?: string }>,
    SigninFormValues
  >({
    mutationFn: signinUser,
    onSuccess: (data) => {
      setAuth(data.data);

      notify.success(data.message || "Signin successful");

      if (!data.data.user.isEmailVerified) {
        router.push("/auth/signup");
      } else {
        router.push("/dashboard");
      }
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
