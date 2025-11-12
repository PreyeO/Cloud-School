// components/OfferCard.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function OfferCard({
  title,
  subtitle,
  desc,
  value,
  ctaText,
}: {
  title: string;
  subtitle: string;
  desc: string;
  value: string;
  ctaText: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-8 rounded-3xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all space-y-4"
    >
      <h3 className="text-2xl font-semibold text-[#E51919]">{title}</h3>
      <p className="font-medium text-gray-900 dark:text-white">{subtitle}</p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
      <p className="text-sm text-gray-500">
        Value:{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {value}
        </span>
      </p>
      <Button className="bg-[#E51919] hover:bg-[#c91414] text-white rounded-2xl w-full mt-3">
        {ctaText}
      </Button>
    </motion.div>
  );
}
