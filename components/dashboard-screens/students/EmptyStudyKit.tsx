"use client";

import { BookOpen } from "lucide-react";
import EmptyState from "../share-components/EmptyState";

export default function StudyKitEmptyScreen() {
  return (
    <EmptyState
      title="No Study Kits Yet"
      description="You haven’t unlocked any study materials. Once your enrollment is confirmed, your lessons and resources will appear here."
      icon={BookOpen}
      actionLabel="Pay Application Fee"
      onAction={() => console.log("Redirect to application page")}
    />
  );
}
