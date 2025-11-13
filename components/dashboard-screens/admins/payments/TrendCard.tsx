"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type ChartProps = {
  data: {
    month: string;
    totalUsers: number;
    applicationFee: number;
    subscriptions: number;
  }[];
};

export function TrendCard({ data }: ChartProps) {
  return (
    <Card className="lg:col-span-3 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] shadow-sm p-6 transition-all duration-300 hover:shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
          <TrendingUp className="h-5 w-5 text-[#E51919]" />
          Monthly Conversion Trends
        </CardTitle>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Track how users progress from signups → application fee → admissions
          each month.
        </p>
      </CardHeader>

      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="appliedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E51919" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#E51919" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="admittedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#22C55E" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#9CA3AF"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              labelStyle={{ color: "#111", fontWeight: 500 }}
            />

            {/* Signed Up */}
            <Area
              type="monotone"
              dataKey="totalUsers"
              stroke="#3B82F6"
              fill="url(#usersGradient)"
              strokeWidth={2}
              name="Total Signed Up"
            />

            {/* Applied */}
            <Area
              type="monotone"
              dataKey="applicationFee"
              stroke="#E51919"
              fill="url(#appliedGradient)"
              strokeWidth={2}
              name="Total Applied"
            />

            {/* Admitted */}
            <Area
              type="monotone"
              dataKey="subscriptions"
              stroke="#22C55E"
              fill="url(#admittedGradient)"
              strokeWidth={2}
              name="Total Admitted"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
