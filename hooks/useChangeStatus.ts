"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatus } from "@/lib/api/admin";

export function useChangeStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      changeUserStatus(id, status),

    onSuccess: () => {
      // Refresh users list and single user page
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
}
