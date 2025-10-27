"use client";

import { CreditCard } from "lucide-react";
import EmptyState from "../share-components/EmptyState";

export default function PaymentHistoryEmptyScreen() {
  return (
    <EmptyState
      icon={CreditCard}
      title="No Payment History Yet"
      description="You haven’t made any payments yet. Once you complete a transaction, your payment details will appear here for easy tracking."
      actionLabel="Make Your First Payment"
      onAction={() => window.open("https://yourpaymentpage.com", "_blank")}
    />
  );
}
