"use client";

import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { formatCurrency, formatDates } from "@/lib/utils";
import { renderStatus } from "./RenderStatus";
import { Transaction } from "@/types/payment";

interface PaymentCardProps {
  payment: Transaction;
  index: number;
}

const PaymentCard = ({ payment, index }: PaymentCardProps) => {
  return (
    <motion.article
      key={payment._id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ translateY: -4 }}
      className="group rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#111216] border border-gray-100 dark:border-[#232323] shadow-sm flex items-center justify-between gap-4"
    >
      <div className="flex items-center gap-4 min-w-0">
        <div className="flex items-center justify-center rounded-lg w-12 h-12 bg-gradient-to-br from-[#ffecec] to-[#fff6f6] dark:from-[#2a100f] dark:to-[#2b0f0f]">
          <CreditCard className="w-5 h-5 text-[#E61A1A]" />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate capitalize">
            {payment.metadata?.paymentType?.replace("_", " ") || "Payment"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
            {payment.metadata?.paymentMethod || "Paystack"} •{" "}
            {formatDates(payment.createdAt)}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          {formatCurrency(Number(payment.amount))}
        </span>
        {renderStatus(payment.status)}
      </div>
    </motion.article>
  );
};

export default PaymentCard;
