"use client";

import { motion } from "framer-motion";
import PaymentButton from "@/components/ui/btns/payment-button";
import Paragraph from "@/components/ui/typography/paragraph";
import SubTitle from "@/components/ui/typography/sub-title";
import React from "react";

interface SupportOptionCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonLabel: string;
  buttonAction: () => void;
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
  buttonBg?: string;
  buttonHoverBg?: string;
  buttonTextColor?: string;
}

const SupportOptionCard = ({
  icon: Icon,
  title,
  description,
  buttonLabel,
  buttonAction,
  bgColor = "bg-white/10",
  textColor = "text-gray-400",
  iconColor = "#E61A1A",
  buttonBg = "bg-[#E61A1A]",
  buttonHoverBg = "hover:bg-[#C81818]",
  buttonTextColor = "text-white",
}: SupportOptionCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className={`p-6 sm:p-10 ${bgColor} backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl flex flex-col items-center text-center`}
    >
      <Icon className={`w-8 h-8 mb-4`} style={{ color: iconColor }} />
      <SubTitle className="mb-2 text-white">{title}</SubTitle>
      <Paragraph className={`mb-6 text-white ${textColor}`}>
        {description}
      </Paragraph>
      <PaymentButton
        label={buttonLabel}
        loadingLabel="Routing..."
        onClick={buttonAction}
        className={`w-full md:w-[70%] px-6 py-2 ${buttonBg} ${buttonHoverBg} ${buttonTextColor} text-base font-medium rounded-xl`}
      />
    </motion.div>
  );
};

export default SupportOptionCard;
