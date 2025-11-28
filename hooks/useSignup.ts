"use client";

import { signupUser } from "@/lib/api/auth";
import { SignUpFormValues, SignupResponse } from "@/types/auth";
import { AxiosError } from "axios";
import { useSmartMutation } from "./useSmartMutation";

export function useSignup() {
  return useSmartMutation<
    SignupResponse,
    AxiosError<{ message?: string }>,
    SignUpFormValues
  >({
    mutationFn: signupUser,
    successMessage: "Signup successful",
    redirectTo: "/verify-otp",
  });
}
