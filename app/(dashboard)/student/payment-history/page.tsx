"use client";
import PaymentHistoryEmptyScreen from "@/components/dashboard-screens/students/EmptyPaymentHistory";
import SubscriptionWrapper from "@/components/dashboard-screens/share-components/SubscriptionWrapper";
import { useSubscriptionStatus } from "@/hooks/useSubscriptionStatus";
import dynamic from "next/dynamic";
const PaymentHistory = dynamic(
  () =>
    import("@/components/dashboard-screens/students/payments/PaymentHistory"),
  { ssr: false }
);

const PaymentHistoryPage = () => {
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
};
export default PaymentHistoryPage;
