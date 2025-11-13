"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { usePayApplicationFee } from "@/hooks/usePayApplicationFee";
import PaymentButton from "@/components/ui/btns/payment-button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
  actionLabel?: string;
  onAction?: () => void;
  showAction?: boolean;
}

const EmptyState = ({
  title = "",
  description = "",
  icon: Icon = BookOpen,
  actionLabel = "",
  showAction = true,
}: EmptyStateProps) => {
  const { mutate: handlePay, isPending } = usePayApplicationFee();
  return (
    <section className="flex min-h-[calc(100vh-140px)] flex-col items-center justify-center ">
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
          <PaymentButton
            label={actionLabel}
            loadingLabel="Processing..."
            isPending={isPending}
            onClick={() => handlePay()}
            className="w-full text-[11px] text-base  rounded-2xl"
          />
        )}
      </motion.div>
    </section>
  );
};
export default EmptyState;
