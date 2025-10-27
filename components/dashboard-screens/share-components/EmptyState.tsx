"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
  actionLabel?: string;
  onAction?: () => void;
  showAction?: boolean;
}

export default function EmptyState({
  title = "",
  description = "",
  icon: Icon = BookOpen,
  actionLabel = "",
  onAction,
  showAction = true,
}: EmptyStateProps) {
  return (
    <section className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center px-6 py-20 bg-white dark:bg-[#0b0b0b] transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center max-w-md"
      >
        {/* Icon */}
        <div className="bg-[#FFF5F5] dark:bg-[#1a1a1a] rounded-full p-5 mb-6 flex items-center justify-center transition-colors duration-300">
          <Icon className="h-10 w-10 text-[#E51919] dark:text-[#ff7b7b]" />
        </div>

        {/* Text */}
        <h2 className="text-2xl font-semibold text-[#0f0f0f] dark:text-white mb-3 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-[#595959] dark:text-gray-400 leading-relaxed text-base mb-8 max-w-sm transition-colors duration-300">
          {description}
        </p>

        {/* Action Button (optional) */}
        {showAction && (
          <Button
            onClick={onAction}
            className="bg-[#E51919] hover:bg-[#c91414] text-white dark:text-white rounded-2xl font-medium px-8 py-6 text-base shadow-sm hover:shadow-md transition-all duration-300"
          >
            {actionLabel}
          </Button>
        )}
      </motion.div>
    </section>
  );
}
