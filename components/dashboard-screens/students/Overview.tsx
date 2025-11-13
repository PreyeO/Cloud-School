"use client";

import { motion } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";
import { steps, summary } from "@/data/students";
import Title from "@/components/ui/typography/title";
import Paragraph from "@/components/ui/typography/paragraph";
import dynamic from "next/dynamic";
const ApplicationFee = dynamic(
  () => import("@/components/payments/ApplicationFee"),
  { ssr: false }
);

const Overview = () => {
  const { user } = useAuthStore();

  return (
    <section className="md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div>
          <Title className="text-2xl sm:text-3xl md:text-4xl leading-snug">
            Welcome,{" "}
            <span className="text-[#E51919]">{user?.firstName} 👋</span>
          </Title>
          <Paragraph className="mt-2 text-sm sm:text-base">
            Your journey to becoming a world-class cloud engineer starts here.
            <br />
            Follow these steps to complete your enrollment and get ready to
            learn.
          </Paragraph>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {steps.map(({ step, title, icon: Icon }) => (
            <motion.div
              key={step}
              whileHover={{ scale: 1.02 }}
              className="p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <Icon className="h-5 w-5 text-[#E51919]" />
                <Paragraph className="font-semibold text-[#E51919] text-sm sm:text-base">
                  Step {step}
                </Paragraph>
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white leading-snug">
                {title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Application Fee Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8"
        >
          {/* Summary Card */}
          <div className="flex-1 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex  justify-between mb-6  ">
              <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 dark:text-white">
                Application Summary
              </h2>
              <span className=" items-center justify-center self-start sm:self-auto bg-[#E51919]/10 text-[#E51919] text-[10px] font-semibold h-5 px-2 flex lg:w-[35%]  xl:w-[18%] text-center rounded-md whitespace-nowrap">
                Limited Slots
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10">
              {summary.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex lg:flex-col xl:flex-row items-center gap-3 p-3 rounded-xl bg-white dark:bg-[#0b0b0b] border border-gray-100 dark:border-gray-800 hover:border-[#E51919]/40 hover:bg-[#fff5f5]/40 transition-colors"
                >
                  <Icon className="h-5 w-5 text-[#E51919]" />
                  <div className="">
                    <Paragraph className="text-sm font-medium text-gray-900">
                      {label}
                    </Paragraph>
                    <Paragraph className="text-xs ">{value}</Paragraph>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Card */}
          <div className="w-full lg:w-[380px]">
            <ApplicationFee />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Overview;
