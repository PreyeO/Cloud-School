"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Award,
  School,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import ApplicationFee from "@/components/payments/ApplicationFee";

export default function Overview() {
  const { user } = useAuthStore();

  const summary = [
    { label: "School", value: "School of Engineering", icon: School },
    { label: "Certificate", value: "Diploma", icon: Award },
    { label: "Duration", value: "12 Months (4 Semesters)", icon: Clock },
    { label: "Location", value: "Online", icon: MapPin },
    { label: "Skill Level", value: "Beginner–Intermediate", icon: Layers },
    { label: "Start Date", value: "January 26th 2026", icon: Layers },
  ];

  return (
    <section className="p-6 md:p-10 bg-[#f9fafb] dark:bg-[#0b0b0b] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Welcome back,{" "}
            <span className="text-[#E51919]">{user?.firstName}</span> 👋🏽
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Here’s a snapshot of your program progress and application details.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="text-[#E51919] h-5 w-5" />
              <p className="font-semibold text-gray-900 dark:text-white">
                Application Status
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Current stage:
            </p>
            <h3 className="text-lg font-bold text-[#E51919]">Approved</h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <Clock className="text-[#E51919] h-5 w-5" />
              <p className="font-semibold text-gray-900 dark:text-white">
                Next Step
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Task:
            </p>
            <h3 className="text-lg font-bold text-[#E51919]">
              Pay Application Fee
            </h3>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <Layers className="text-[#E51919] h-5 w-5" />
              <p className="font-semibold text-gray-900 dark:text-white">
                Progress
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Enrollment Progress:
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
              <div
                className="bg-[#E51919] h-2 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              35% Completed
            </p>
          </motion.div>
        </div>

        {/* Application Fee Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-stretch gap-8"
        >
          {/* Summary Card */}
          <div className="flex-1 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Application Summary
              </h2>
              <span className="bg-[#E51919]/10 text-[#E51919] text-xs font-semibold px-3 py-1 rounded-full">
                Limited Slots
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {summary.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#0b0b0b] border border-gray-100 dark:border-gray-800 hover:border-[#E51919]/40 hover:bg-[#fff5f5]/40 transition-colors"
                >
                  <Icon className="h-5 w-5 text-[#E51919]" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Card */}
          <ApplicationFee />
        </motion.div>
      </div>
    </section>
  );
}
