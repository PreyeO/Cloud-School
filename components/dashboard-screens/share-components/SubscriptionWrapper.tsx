"use client";

import LoadingState from "@/components/ui/loaders/loading-state";
import { ReactNode } from "react";

interface SubscriptionWrapperProps {
  isLoading: boolean;
  isPending: boolean;
  emptyStateComponent: ReactNode;
  children: ReactNode;
}

export default function SubscriptionWrapper({
  isLoading,
  isPending,
  emptyStateComponent,
  children,
}: SubscriptionWrapperProps) {
  // Show spinner while loading
  if (isLoading) {
    return (
      <main className="p-8">
        <LoadingState />
      </main>
    );
  }

  // Show fallback/empty component if pending
  if (isPending) {
    return <>{emptyStateComponent}</>;
  }

  // Render main content once ready
  return <>{children}</>;
}
