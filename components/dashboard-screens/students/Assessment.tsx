"use client";

import { motion } from "framer-motion";
import { guidelines, info } from "@/data/students";
import { ExternalLink } from "lucide-react";
import Title from "@/components/ui/typography/title";
import Paragraph from "@/components/ui/typography/paragraph";
import SubTitle from "@/components/ui/typography/sub-title";
import PaymentButton from "@/components/ui/btns/payment-button";

const AssessmentScreen = () => {
  return (
    <section className="min-h-screen md:px-10 pt-10">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5"
        >
          <Title className="">
            Your <span className="text-[#E61A1A]">Assessment</span> Awaits...
          </Title>
          <Paragraph className="text-base sm:text-lg max-w-2xl mx-auto">
            You’ve reached the moment that measures mastery. <br />
            Stay focused, stay calm, and give it your best — this is your chance
            to prove your readiness for the Cloud Top G journey ahead.
          </Paragraph>
        </motion.div>

        {/* Assessment Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {info.map(({ icon: Icon, title, value }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-white dark:bg-[#111] border border-gray-200 dark:border-[#1a1a1a] shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#E61A1A]/10 text-[#E61A1A]">
                  <Icon className="h-6 w-6" />
                </div>
                <SubTitle className="text-lg font-semibold">{title}</SubTitle>
                <Paragraph className="text-sm">{value}</Paragraph>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <div className="w-32 border-b-2 border-[#E61A1A]/50" />
        </motion.div>

        <Paragraph className="text-center max-w-lg mx-auto text-sm sm:text-base">
          You’ve got this… take a moment to steady yourself, then dive in when
          you’re ready.
        </Paragraph>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111] border border-gray-200 dark:border-[#1a1a1a] shadow-md"
        >
          <SubTitle className="mb-3">Before You Begin</SubTitle>
          <Paragraph className="mb-6">
            Please review these important guidelines to ensure a smooth and fair
            assessment experience.
          </Paragraph>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {guidelines.map((rule, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#E61A1A]" />
                <Paragraph className="flex-1 text-sm sm:text-base">
                  {rule}
                </Paragraph>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <PaymentButton
            label="Begin Assessment"
            loadingLabel="Routing..."
            onClick={() =>
              window.open("https://yourassessmentlink.com", "_blank")
            }
            className="mx-auto w-full md:w-[70%] text-[11px] text-base  rounded-2xl"
          >
            Begin Assessment
            <ExternalLink className="ml-2 w-5 h-5" />
          </PaymentButton>

          <Paragraph className="text-[12px] max-w-md mx-auto mt-1">
            The assessment will open in a new tab — please avoid closing this
            page.
          </Paragraph>
        </motion.div>
      </div>
    </section>
  );
};
export default AssessmentScreen;
