"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  CreditCard,
  Layers,
  Wallet,
  CheckCircle2,
} from "lucide-react";
import SchoolFees from "@/components/payments/SchoolFee";

export default function EnrollmentScreen() {
  const plans = [
    {
      title: "Legacy Access Plan",
      span: "(Best for early visionaries who move first)",
      price: "₦150,000 / deposit",
      total: "₦600,000 Total",
      duration: "(4 Semesters, 12 Months)",
      icon: Wallet,
      note: " Secure your advantage — the most flexible path to start your legacy.",
      highlights: [
        " ₦150,000 per semester — flexible and easy to manage.",
        "Structured over 4 semesters with mentor-guided progress.",
        "Full program access unlocked after first payment.",
      ],
      timeline: {
        period: "Nov 1 – Dec 20",
        label: "Legacy Access Window",
      },
    },
    {
      title: "Prime Access Plan",
      span: "(Ideal for action-takers ready to accelerate)",
      price: "₦300,000 / deposit",
      total: "₦600,000 Total",
      duration: "(4 Semesters, 12 Months)",
      icon: CreditCard,
      note: "A balanced plan for those ready to gain momentum without delay.",
      highlights: [
        "₦300,000 up-front covers 2 semesters.",
        "Remaining ₦300,000 due later in your journey.",
        "Immediate program access and mentor integration.",
      ],
      timeline: {
        period: " Nov 1 – Jan 20",
        label: "Prime Access Window",
      },
    },
    {
      title: "Elite Access Plan",
      span: "(For those going all-in from day one)",
      price: "₦600,000 Full Payment",
      total: "₦600,000 Total",
      duration: "(4 Semesters, 12 Months)",
      icon: Layers,
      note: "Pay once — own your seat among the Top 1% instantly.",
      highlights: [
        " One-time full investment for the entire program.",
        "Instant unrestricted access to all systems and resources.",
        "Priority mentor support and lifetime network benefits.",
      ],
      timeline: {
        period: "Nov 1 – Feb 17",
        label: " Elite Access Window",
      },
    },
  ];

  return (
    <section className="px-6 md:px-12 py-20 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-[#0B0B0B] dark:via-[#0E0E0E] dark:to-[#0B0B0B] transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center mb-16 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          Secure Your Seat in the Cloud Top G Program
        </motion.h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Each Access Plan unlocks exclusive learning assets, mentorship
          systems, and premium career tools designed to accelerate your path to
          the Top 1%.
          <span className="text-[#E51919] font-semibold">
            Cloud Engineering Program
          </span>{" "}
          — designed for your tech journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex"
          >
            <Card className="relative flex flex-col justify-between w-full rounded-3xl border border-gray-200 dark:border-gray-800 backdrop-blur-lg bg-white/80 dark:bg-[#121212]/70 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-[#E51919] via-[#ff4d4d] to-[#E51919]" />

              <CardHeader className="pt-8">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {plan.title}
                  </CardTitle>
                  <plan.icon className="h-6 w-6 text-[#E51919]" />
                </div>
                <span className="text-[11px] text-gray-500 dark:text-gray-400">
                  {plan.span}
                </span>

                <div className="mt-4 space-y-1">
                  <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {plan.price}
                  </p>
                  <div className="flex gap-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {plan.total}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {plan.duration}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pb-8">
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  {plan.highlights.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#E51919]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50/70 dark:bg-[#1A1A1A]/80 border border-gray-200 dark:border-gray-800 rounded-xl p-4 shadow-sm">
                  <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                    <Calendar className="w-4 h-4 text-[#E51919]" />
                    {plan.timeline.label}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
                    {plan.timeline.period}
                  </p>
                </div>

                <Separator className="my-2 bg-gray-200 dark:bg-gray-800" />

                <p className="text-xs italic text-gray-500 dark:text-gray-400">
                  {plan.note}
                </p>

                {/* 🔹 School Fees Component inserted here */}
                <SchoolFees planTitle={plan.title} amount={plan.total} />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
