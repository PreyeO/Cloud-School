"use client";

import { useMutation } from "@tanstack/react-query";
import { signupUser } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { useRouter } from "next/navigation";

export function useSignup() {
  const router = useRouter();

  return useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      notify.success(data.message || "Signup successful");
      router.push("/auth/verify-otp");
    },
  });
}
