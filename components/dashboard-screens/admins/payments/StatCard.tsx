"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

type StatCardProps = {
  label: string;
  value: string | number;
  icon: React.ElementType;
  trend?: string;
  delay?: number;
};

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card className="w-full p-6 rounded-3xl border border-gray-200  bg-white dark:bg-[#111] shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center justify-between">
          <Icon className="h-6 w-6 text-[#E51919]" />
          {trend && <span className="text-xs text-gray-500">{trend}</span>}
        </div>
        <h3 className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
          {label}
        </h3>
        <p className="text-xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      </Card>
    </motion.div>
  );
}
