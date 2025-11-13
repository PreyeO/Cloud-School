"use client";
import Paragraph from "@/components/ui/typography/paragraph";
import { resources } from "@/data/students";
import { motion } from "framer-motion";

const LessonResources = () => {
  return (
    <div className="mt-6 grid sm:grid-cols-2 gap-4">
      {resources.map((r, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.02 }}
          className="p-5 rounded-2xl border border-gray-100 dark:border-[#1a1a1a] shadow-sm hover:shadow-md flex items-center gap-3 bg-white dark:bg-[#141414] transition-all"
        >
          <r.icon className="w-6 h-6 text-[#E61A1A]" />
          <div>
            <Paragraph>{r.name}</Paragraph>
            <Paragraph>{r.type}</Paragraph>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
export default LessonResources;
