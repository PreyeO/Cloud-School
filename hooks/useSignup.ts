"use client";

import { useMutation } from "@tanstack/react-query";
import { signupUser } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { useRouter } from "next/navigation";
import { SignUpFormValues, SignupResponse } from "@/types/auth";
import { AxiosError } from "axios";

export function useSignup() {
  const router = useRouter();

  return useMutation<
    SignupResponse,
    AxiosError<{ message?: string }>,
    SignUpFormValues
  >({
    mutationFn: signupUser,
    onSuccess: (data) => {
      notify.success(data.message || "Signup successful");
      router.push("/verify-otp");
    },
    onError: (error) => {
      const message =
        error.response?.data?.message || error.message || "Signup failed";
      notify.error(message);
    },
  });
}
