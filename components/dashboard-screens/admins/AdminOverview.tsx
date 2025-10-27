"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Users, CreditCard, BookOpen, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

// AdminOverview - single-file React component made to drop into your Next.js + Tailwind project.
// Designed to match the style and palette already in your student views (#E51919 accents, dark/light support).

type StatCard = {
  id: string;
  label: string;
  value: string | number;
  sub?: string;
  Icon?: React.ComponentType<any>;
};

const stats: StatCard[] = [
  {
    id: "students",
    label: "Total Students",
    value: 240,
    sub: "+12 this week",
    Icon: Users,
  },
  {
    id: "fees",
    label: "Total Application Paid",
    value: "₦7,450,000",
    sub: "this term",
    Icon: CreditCard,
  },
  {
    id: "fees",
    label: "Total School Fees Paid",
    value: "₦2,450,000",
    sub: "this term",
    Icon: Wallet,
  },

  {
    id: "assessment",
    label: "Total Entry Assesment Completed",
    value: 86,
    // sub: "+4 today",
    Icon: BookOpen,
  },
];

const funnel = [
  { stage: "Signed Up", count: 145, pct: 100 },
  { stage: "Applied", count: 145, pct: 100 },
  { stage: "Enrolled", count: 95, pct: 65 },
  { stage: "Admitted", count: 40, pct: 28 },
];
const MarketingFunnel = [
  { stage: "Whatsapp", count: 145, pct: 100 },
  { stage: "Friend/Referral", count: 145, pct: 100 },
  { stage: "Facebook", count: 95, pct: 65 },
  { stage: "Linkedin", count: 40, pct: 28 },
];

const completionData = [
  { week: "W1", completed: 12 },
  { week: "W2", completed: 22 },
  { week: "W3", completed: 35 },
  { week: "W4", completed: 48 },
  { week: "W5", completed: 60 },
  { week: "W6", completed: 75 },
];

const courseDistribution = [
  { name: "AWS Basics", value: 45 },
  { name: "Linux & Networking", value: 30 },
  { name: "DevOps", value: 25 },
];
const COLORS = ["#E51919", "#FF8A80", "#FFD180"];

const recentActivities = [
  { id: 1, text: "Sandra completed Module 2 Assessment.", time: "12m" },
  { id: 2, text: "New application from John Doe.", time: "35m" },
  { id: 3, text: "Payment received: ₦150,000 (Early Bird).", time: "2h" },
  { id: 4, text: "Course 'DevOps' created by Admin.", time: "1d" },
];

export default function AdminOverview() {
  return (
    <section className="p-6 md:p-10 bg-[#f9fafb] dark:bg-[#0b0b0b] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <motion.div
              key={s.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {s.label}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                    {s.value}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {s.sub}
                  </p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-[#E51919]/10 flex items-center justify-center">
                  {s.Icon ? (
                    <s.Icon className="h-5 w-5 text-[#E51919]" />
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Assesment Performance
                </h2>
                <div className="flex items-center gap-3">
                  <Button className="bg-[#E51919] hover:bg-[#c91414] text-white rounded-xl px-4 py-2">
                    Export CSV
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={completionData}>
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

                <div className="h-56 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={courseDistribution}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={70}
                        fill="#8884d8"
                      >
                        {courseDistribution.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#0b0b0b] border border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500">
                    Average Completion Rate
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      78%
                    </h3>
                    <p className="text-xs text-gray-500">+6% vs last month</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#0b0b0b] border border-gray-100 dark:border-gray-800">
                  <p className="text-sm text-gray-500">Avg Assessment Score</p>
                  <div className="flex items-center gap-4 mt-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      83%
                    </h3>
                    <p className="text-xs text-gray-500">Top student: 98%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Admission Funnel
              </h3>
              <div className="space-y-3">
                {funnel.map((f) => (
                  <div
                    key={f.stage}
                    className="flex items-center justify-between"
                  >
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

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Marketing Funnel
              </h3>
              <div className="space-y-3">
                {MarketingFunnel.map((f) => (
                  <div
                    key={f.stage}
                    className="flex items-center justify-between"
                  >
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
          </aside>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className=" p-6 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activities
          </h2>
          <div className="space-y-3">
            {recentActivities.map((a) => (
              <div
                key={a.id}
                className="flex items-start justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#0b0b0b] border border-gray-100 dark:border-gray-800"
              >
                <div>
                  <p className="text-sm text-gray-900 dark:text-white">
                    {a.text}
                  </p>
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
      </div>
    </section>
  );
}
