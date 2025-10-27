"use client";

import { useMutation } from "@tanstack/react-query";
import { UpdateDetailsFormValues, UpdateDetailsResponse } from "@/types/auth";
import { notify } from "@/lib/notify";
import { AxiosError } from "axios";
import { useAuthStore } from "@/store/useAuthStore";
import { updateDetails } from "@/lib/api/student";

export function useUpdateDetails() {
  return useMutation<
    UpdateDetailsResponse,
    AxiosError<{ message?: string }>,
    UpdateDetailsFormValues
  >({
    mutationFn: updateDetails,

    onSuccess: (data) => {
      const { user, tokens, setAuth } = useAuthStore.getState();

      if (!tokens) {
        notify.error("Session expired. Please log in again.");
        return;
      }

      const updatedUser = {
        ...user!,
        ...data.data.user,
      };

      setAuth({ user: updatedUser, tokens });
      notify.success(data.message || "Details updated successfully!");

      const storageKey = `detailsModalClosed_${updatedUser._id}`;
      localStorage.setItem(storageKey, "true");
    },

    onError: (error) => {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Failed to update details";
      notify.error(message);
    },
  });
}
