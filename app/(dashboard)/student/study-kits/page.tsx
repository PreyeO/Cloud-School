"use client";

import { useSubscriptionStatus } from "@/hooks/useSubscriptionStatus";
import StudyKitEmptyScreen from "@/components/dashboard-screens/students/EmptyStudyKit";
import StudyKit from "@/components/dashboard-screens/students/StudyKit";
import SubscriptionWrapper from "@/components/dashboard-screens/share-components/SubscriptionWrapper";

export default function StudyKitPage() {
  const { hasPaid, isLoading } = useSubscriptionStatus();

  return (
    <SubscriptionWrapper
      isLoading={isLoading}
      isPending={!hasPaid} // 🔁 if not paid, show empty screen
      emptyStateComponent={<StudyKitEmptyScreen />}
    >
      <StudyKit />
    </SubscriptionWrapper>
  );
}
