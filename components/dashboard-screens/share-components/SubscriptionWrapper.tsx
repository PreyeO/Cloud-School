"use client";

import { ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface SubscriptionWrapperProps {
  isLoading: boolean;
  isPending: boolean;
  emptyStateComponent: ReactNode; // component to render if pending
  children: ReactNode; // content to render if active
  skeletonConfig?: {
    titleCount?: number;
    cardCount?: number;
    layout?: "grid" | "list";
  };
}

export default function SubscriptionWrapper({
  isLoading,
  isPending,
  emptyStateComponent,
  children,
  skeletonConfig,
}: SubscriptionWrapperProps) {
  if (isLoading) {
    const {
      titleCount = 2,
      cardCount = 6,
      layout = "grid",
    } = skeletonConfig || {};

    return (
      <main className="p-8 space-y-6">
        {/* Title placeholders */}
        {Array.from({ length: titleCount }).map((_, i) => (
          <Skeleton
            key={i}
            className={`h-6 ${i === 0 ? "w-1/3" : "w-2/3"} rounded-md`}
          />
        ))}

        {/* Card placeholders */}
        <div
          className={
            layout === "grid"
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
              : "flex flex-col gap-4 mt-8"
          }
        >
          {Array.from({ length: cardCount }).map((_, i) => (
            <Skeleton key={i} className="h-48 rounded-2xl" />
          ))}
          <Skeleton className="h-48 rounded-2xl" />
        </div>
      </main>
    );
  }

  if (isPending) return <>{emptyStateComponent}</>;

  return <>{children}</>;
}
