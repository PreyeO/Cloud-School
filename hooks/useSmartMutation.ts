"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { notify } from "@/lib/notify";

export interface SmartMutationOptions<TData, TError, TVariables> {
  mutationFn: (data: TVariables) => Promise<TData>;
  successMessage?: string;
  redirectTo?: string;
  onSuccess?: (data: TData, variables: TVariables) => void; // accept both args
  onError?: (error: TError) => void;
  mutationOptions?: UseMutationOptions<TData, TError, TVariables>;
}

export function useSmartMutation<
  TData extends { message?: string },
  TError extends {
    response?: { data?: { message?: string } };
    message?: string;
  },
  TVariables
>({
  mutationFn,
  successMessage,
  redirectTo,
  onSuccess,
  onError,
  mutationOptions,
}: SmartMutationOptions<TData, TError, TVariables>) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const mutation = useMutation<TData, TError, TVariables>({
    mutationFn,

    onSuccess: async (data, variables) => {
      // Show server message or fallback
      notify.success(data.message || successMessage || "Success");

      // Forward to optional user-defined callback
      if (onSuccess) onSuccess(data, variables);

      // Handle optional redirect
      if (redirectTo) {
        setIsNavigating(true);
        await router.push(redirectTo);
        setIsNavigating(false);
      }
    },

    onError: (error) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";
      notify.error(message);

      if (onError) onError(error);
    },

    ...mutationOptions,
  });

  return {
    ...mutation,
    isProcessing: mutation.isPending || isNavigating,
  };
}
