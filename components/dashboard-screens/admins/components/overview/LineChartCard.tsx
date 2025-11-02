"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";

// Define the type for each data point in the chart
type ChartDataPoint = {
  week: string;
  completed: number;
};

interface LineChartCardProps {
  data: ChartDataPoint[];
}

export function LineChartCard({ data }: LineChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Assessment Performance
        </h2>
        <Button className="bg-[#E51919] hover:bg-[#c91414] text-white rounded-xl px-4 py-2">
          Export CSV
        </Button>
      </div>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="week" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#E51919"
              strokeWidth={3}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
