"use client";

import { ClipboardCheck } from "lucide-react";
import EmptyState from "../share-components/EmptyState";

export default function AssessmentEmptyScreen() {
  return (
    <EmptyState
      icon={ClipboardCheck}
      title="Ready for Your Assessment?"
      description="You haven’t started your assessment yet. Once you begin, make sure you stay connected and focused — you have only one attempt."
      actionLabel="Pay Application Fee"
      onAction={() => window.open("https://yourassessmentlink.com", "_blank")}
    />
  );
}
