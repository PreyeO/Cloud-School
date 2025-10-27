"use client";
import SubscriptionWrapper from "@/components/dashboard-screens/share-components/SubscriptionWrapper";
import AssessmentScreen from "@/components/dashboard-screens/students/Assessment";
import AssessmentEmptyScreen from "@/components/dashboard-screens/students/EmptyAssessment";
import { useSubscriptionStatus } from "@/hooks/useSubscriptionStatus";

export default function AssessmentPage() {
  const { isPending, isLoading } = useSubscriptionStatus();
  return (
    <SubscriptionWrapper
      isLoading={isLoading}
      isPending={isPending}
      emptyStateComponent={<AssessmentEmptyScreen />}
    >
      <AssessmentScreen />
    </SubscriptionWrapper>
  );
}
