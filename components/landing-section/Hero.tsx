import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl text-center"
      >
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Choose Your Experience
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Select how you want to access the Cloud Top G platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Student card */}
          <Link href="/signup">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-2xl px-6 py-10 transition-all"
            >
              <div className="flex flex-col items-center gap-4">
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E51919]/10">
                  <GraduationCap className="w-7 h-7 text-[#E51919]" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  I’m a Student
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Apply, enroll, track progress, and access your learning
                  journey.
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Admin card */}
          <Link href="/authentication/login">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-2xl px-6 py-10 transition-all"
            >
              <div className="flex flex-col items-center gap-4">
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#111]/5">
                  <ShieldCheck className="w-7 h-7 text-[#111]" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  I’m an Admin
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Manage students, track applications, and control platform
                  data.
                </p>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Footer text */}
        <p className="mt-10 text-[#6F6E6C] text-xs">
          Cloud Top G • Cohort 2026
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
