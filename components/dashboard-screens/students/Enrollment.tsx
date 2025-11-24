"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, CheckCircle2 } from "lucide-react";
import SchoolFees from "@/components/payments/SchoolFee";
import { plans } from "@/data/students";
import Title from "@/components/ui/typography/title";
import Paragraph from "@/components/ui/typography/paragraph";

const EnrollmentScreen = () => {
  return (
    <section className="min-h-screen md:px-10 pt-10">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Title>Secure Your Seat in the Cloud Top G Program</Title>
        </motion.div>
        <Paragraph className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Each Access Plan unlocks exclusive learning assets, mentorship
          systems, and premium career tools designed to accelerate your path to
          the Top 1%.
          <span className="text-[#E51919] font-semibold">
            {" "}
            Cloud Engineering Program
          </span>{" "}
          — designed for your tech journey.
        </Paragraph>
      </div>

      {/* Plans Grid */}
      <div className="max-w-7xl mx-auto grid gap-6  lg:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex"
          >
            <Card className="relative flex flex-col justify-between w-full h-full rounded-3xl border border-gray-200 backdrop-blur-lg bg-white/80 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-[#E51919] via-[#ff4d4d] to-[#E51919]" />

              <CardHeader className="pt-8">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 ">
                    {plan.title}
                  </CardTitle>
                  <plan.icon className="h-5 sm:h-6 w-5 sm:w-6 text-[#E51919]" />
                </div>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {plan.span}
                </span>

                <div className="mt-4 space-y-1">
                  <Paragraph className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    {plan.price}
                  </Paragraph>
                  <div className="flex gap-1 flex-wrap justify-center sm:justify-start">
                    <Paragraph className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {plan.total}
                    </Paragraph>
                    <Paragraph className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      {plan.duration}
                    </Paragraph>
                  </div>
                </div>
              </CardHeader>

              {/* Make content flex-grow to fill remaining space */}
              <CardContent className="flex flex-col justify-between space-y-6 pb-8 h-full">
                <div className="flex-1">
                  <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {plan.highlights.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#E51919]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50/70  border-gray-200  rounded-xl p-3 sm:p-4 shadow-sm mt-4">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                      <Calendar className="w-4 h-4 text-[#E51919]" />
                      {plan.timeline.label}
                    </div>
                    <Paragraph className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 text-center">
                      {plan.timeline.period}
                    </Paragraph>
                  </div>
                </div>

                <div>
                  <Separator className="my-2 bg-gray-200 dark:bg-gray-800" />
                  <Paragraph className="text-xs italic text-gray-500 dark:text-gray-400 pb-3">
                    {plan.note}
                  </Paragraph>
                  <SchoolFees planTitle={plan.title} amount={plan.total} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EnrollmentScreen;
