"use client";

import { motion } from "framer-motion";
import React from "react";

export const FunnelCard = ({
  title,
  data,
}: {
  title: string;
  data: { stage: string; count: number; pct: number }[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>

      <div className="space-y-3">
        {data.map((f) => (
          <div key={f.stage} className="flex items-center justify-between">
            <div className="w-28 text-sm text-gray-600 dark:text-gray-400">
              {f.stage}
            </div>
            <div className="flex-1 mx-4 bg-gray-100 dark:bg-[#0b0b0b] rounded-full h-3 overflow-hidden">
              <div
                className="h-3 rounded-full bg-[#E51919]"
                style={{ width: `${f.pct}%` }}
              />
            </div>
            <div className="w-12 text-right text-sm text-gray-600 dark:text-gray-400">
              {f.count}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
