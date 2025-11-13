"use client";

import { BookOpen } from "lucide-react";
import EmptyState from "../share-components/EmptyState";

const StudyKitEmptyScreen = () => {
  return (
    <EmptyState
      title="No Study Kits Yet..."
      description="Apply to the School of Cloud Engineering to unlock your full Study Kit and begin your journey."
      icon={BookOpen}
      actionLabel="Apply Now to Unlock Your Study Kit"
    />
  );
};
export default StudyKitEmptyScreen;
