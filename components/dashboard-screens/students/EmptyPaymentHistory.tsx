"use client";

import { CreditCard } from "lucide-react";
import EmptyState from "../share-components/EmptyState";

export default function PaymentHistoryEmptyScreen() {
  return (
    <EmptyState
      icon={CreditCard}
      title="No Payment History Yet…"
      description="You haven’t applied or made any payments yet. Once your enrollment is confirmed, your payment records and receipts will appear here for easy tracking."
      actionLabel="Apply to See History"
    />
  );
}
