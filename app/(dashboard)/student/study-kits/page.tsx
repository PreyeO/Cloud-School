"use client";

import { useSubscriptionStatus } from "@/hooks/useSubscriptionStatus";
import StudyKitEmptyScreen from "@/components/dashboard-screens/students/EmptyStudyKit";
import StudyKit from "@/components/dashboard-screens/students/study-kit/StudyKit";
import SubscriptionWrapper from "@/components/dashboard-screens/share-components/SubscriptionWrapper";

const StudyKitPage = () => {
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
};
export default StudyKitPage;
