"use client";

import { ClipboardCheck } from "lucide-react";
import EmptyState from "../share-components/EmptyState";

const AssessmentEmptyScreen = () => {
  return (
    <EmptyState
      icon={ClipboardCheck}
      title="Ready for Your Assessment?"
      description="You haven’t applied or unlocked your assessment yet.. Once your Application is confirmed, your assessment details will appear here with your start date and instructions."
      actionLabel="Apply to Unlock Assessment"
    />
  );
};
export default AssessmentEmptyScreen;
