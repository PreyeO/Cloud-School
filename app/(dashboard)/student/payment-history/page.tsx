"use client";
import PaymentHistoryEmptyScreen from "@/components/dashboard-screens/students/EmptyPaymentHistory";
import SubscriptionWrapper from "@/components/dashboard-screens/share-components/SubscriptionWrapper";
import PaymentHistory from "@/components/dashboard-screens/students/PaymentHistory";
import { useSubscriptionStatus } from "@/hooks/useSubscriptionStatus";

export default function PaymentHistoryPage() {
  const { hasPaid, isLoading } = useSubscriptionStatus();
  return (
    <SubscriptionWrapper
      isLoading={isLoading}
      isPending={!hasPaid}
      emptyStateComponent={<PaymentHistoryEmptyScreen />}
    >
      <PaymentHistory />
    </SubscriptionWrapper>
  );
}
