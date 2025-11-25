"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type FunnelStats = {
  applied: number;
  admitted: number;
  enrolled: number;
  withdrawn: number;
};

type TrendCardProps = {
  funnel: FunnelStats;
  className?: string;
};

export function TrendCard({ funnel, className }: TrendCardProps) {
  // Convert your static funnel numbers into a fake trend timeline
  const chartData = [
    {
      stage: "Signed Up",
      value: funnel.applied + funnel.admitted + funnel.enrolled,
    },
    { stage: "Applied", value: funnel.applied },
    { stage: "Admitted", value: funnel.admitted },
    { stage: "Enrolled", value: funnel.enrolled },
    { stage: "Withdrawn", value: funnel.withdrawn },
  ];

  return (
    <div className={`w-full h-full flex flex-col ${className || ""}`}>
      <Card className="rounded-3xl border bg-white dark:bg-[#111] shadow-sm p-6 flex flex-col flex-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-semibold">
            <TrendingUp className="h-5 w-5 text-[#E51919]" />
            Admission Funnel Trend
          </CardTitle>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Visual breakdown of how users progress through each admission stage.
          </p>
        </CardHeader>

        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="stage" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="value"
                stroke="#E51919"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
