"use client";
import { motion } from "framer-motion";
import { PlayCircle, CheckCircle2, Headphones } from "lucide-react";

import LinkButton from "@/components/ui/btns/link-button";
import SubTitle from "@/components/ui/typography/sub-title";
import { lessons } from "@/data/students";

const LessonSidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <SubTitle>Lesson Breakdown</SubTitle>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <motion.div
            key={lesson.id}
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-2xl flex items-center justify-between border transition-all ${
              lesson.active
                ? "border-[#E61A1A] bg-[#FFF5F5] dark:bg-[#1a0b0b]"
                : "border-gray-200 dark:border-[#1a1a1a] bg-white dark:bg-[#111]"
            }`}
          >
            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
              {lesson.title}
            </h4>
            {lesson.active ? (
              <PlayCircle className="w-5 h-5 text-[#E61A1A]" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-gray-300 dark:text-gray-600" />
            )}
          </motion.div>
        ))}
      </div>

      <LinkButton
        href="/student/support"
        className="bg-[#E61A1A] hover:bg-[#c81818]"
      >
        <Headphones className="w-5 h-5" />
        Start Assessment
      </LinkButton>
    </motion.aside>
  );
};

export default LessonSidebar;
