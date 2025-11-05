"use client";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Toaster } from "sonner";

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  // ✅ prevent QueryClient from being re-created on every render
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
      <Toaster />
    </QueryClientProvider>
  );
}
