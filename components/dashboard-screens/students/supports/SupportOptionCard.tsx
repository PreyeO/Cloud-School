"use client";

import { motion } from "framer-motion";
import PaymentButton from "@/components/ui/btns/payment-button";
import Paragraph from "@/components/ui/typography/paragraph";
import React from "react";

interface SupportOptionCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonLabel: string;
  buttonAction: () => void;
  iconColor?: string;
  theme?: "solid" | "light";
}

const SupportOptionCard = ({
  icon: Icon,
  title,
  description,
  buttonLabel,
  buttonAction,
  iconColor = "#E61A1A",
  theme = "solid",
}: SupportOptionCardProps) => {
  const isSolid = theme === "solid";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`p-8 rounded-2xl border shadow-sm transition-all flex flex-col items-center text-center
        ${isSolid ? "bg-[#F9FAFB]" : "bg-white"}
      `}
    >
      <Icon className="w-10 h-10 mb-4" style={{ color: iconColor }} />

      <h3 className="text-lg font-semibold mb-1 text-gray-900">{title}</h3>

      <Paragraph className="text-gray-600 text-sm mb-6 max-w-xs">
        {description}
      </Paragraph>

      <PaymentButton
        label={buttonLabel}
        loadingLabel="Loading..."
        onClick={buttonAction}
        className={`w-full py-2 rounded-lg font-medium transition
          ${
            isSolid
              ? "bg-gray-900 text-white hover:bg-black"
              : "bg-white text-gray-900 border hover:bg-gray-100"
          }
        `}
      />
    </motion.div>
  );
};

export default SupportOptionCard;
