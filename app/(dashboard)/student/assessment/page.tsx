"use client";
import SubscriptionWrapper from "@/components/dashboard-screens/share-components/SubscriptionWrapper";
import AssessmentScreen from "@/components/dashboard-screens/students/Assessment";
import AssessmentEmptyScreen from "@/components/dashboard-screens/students/EmptyAssessment";
import { useSubscriptionStatus } from "@/hooks/useSubscriptionStatus";

export default function AssessmentPage() {
  const { hasPaid, isLoading } = useSubscriptionStatus();
  return (
    <SubscriptionWrapper
      isLoading={isLoading}
      isPending={!hasPaid}
      emptyStateComponent={<AssessmentEmptyScreen />}
    >
      <AssessmentScreen />
    </SubscriptionWrapper>
  );
}
