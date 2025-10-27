"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Timer,
  ClipboardCheck,
  FileQuestion,
  ExternalLink,
} from "lucide-react";

export default function AssessmentScreen() {
  const info = [
    { icon: Timer, title: "Duration", value: "45 Minutes" },
    { icon: FileQuestion, title: "Questions", value: "30 Multiple Choice" },
    { icon: ClipboardCheck, title: "Passing Score", value: "70% Minimum" },
  ];

  const guidelines = [
    "Ensure a strong internet connection before starting.",
    "Do not close or refresh the tab once the assessment begins.",
    "You have only one attempt — make sure you're ready.",
    "Your progress is automatically saved during the test.",
    "Avoid switching tabs or opening new windows during the assessment.",
  ];

  return (
    <section className="min-h-screen bg-[#fafafa] dark:bg-[#0b0b0b] text-[#111] dark:text-gray-100 px-6 md:px-10 py-16">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* 🧠 Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Your <span className="text-[#E61A1A]">Assessment</span> Awaits
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            You’ve completed your learning path — now it’s time to showcase your
            mastery. Focus, breathe, and give it your best.
          </p>
        </motion.div>

        {/* 🧩 Assessment Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-3 gap-6"
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
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ⚙️ Guidelines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="p-10 rounded-2xl bg-white dark:bg-[#111] border border-gray-200 dark:border-[#1a1a1a] shadow-md"
        >
          <h2 className="text-2xl font-bold mb-3 ">Before You Begin</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please review these guidelines carefully to ensure a smooth and fair
            assessment experience.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {guidelines.map((rule, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#E61A1A]" />
                {rule}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 🚀 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <Button
            className="bg-[#E61A1A] hover:bg-[#c91414] text-white font-semibold py-6 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              window.open("https://yourassessmentlink.com", "_blank")
            }
          >
            Begin Assessment
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The assessment will open in a new tab — please avoid closing this
            page.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
