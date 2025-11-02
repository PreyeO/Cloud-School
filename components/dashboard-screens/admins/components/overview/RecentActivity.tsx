"use client";

import { motion } from "framer-motion";

export function RecentActivityCard({
  activities,
}: {
  activities: { id: number; text: string; time: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.06 }}
      className="p-6 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Recent Activities
      </h2>
      <div className="space-y-3">
        {activities.map((a) => (
          <div
            key={a.id}
            className="flex items-start justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#0b0b0b] border border-gray-100 dark:border-gray-800"
          >
            <div>
              <p className="text-sm text-gray-900 dark:text-white">{a.text}</p>
              <p className="text-xs text-gray-500 mt-1">{a.time} ago</p>
            </div>
            <div className="text-xs text-gray-400">
              {a.id <= 2 ? (
                <span className="text-[#E51919] font-semibold">New</span>
              ) : (
                <span> </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
