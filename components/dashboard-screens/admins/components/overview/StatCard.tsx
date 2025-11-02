"use client";

import { motion } from "framer-motion";
import React from "react";

type StatCardProps = {
  label: string;
  value: string | number;
  sub?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export function StatCard({ label, value, sub, Icon }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            {value}
          </h3>
          {sub && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {sub}
            </p>
          )}
        </div>
        {Icon && (
          <div className="h-10 w-10 rounded-lg bg-[#E51919]/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-[#E51919]" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
