"use client";

import { motion } from "framer-motion";
import Paragraph from "@/components/ui/typography/paragraph";
import { FC } from "react";
import { Resource } from "@/types/student";

interface LessonResourcesProps {
  resources: Resource[];
}

const LessonResources: FC<LessonResourcesProps> = ({ resources }) => {
  return (
    <div className="mt-6 grid sm:grid-cols-2 gap-4">
      {resources.map((r, i) => (
        <motion.a
          href={r.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
          whileHover={{ scale: 1.02 }}
          className="p-5 border rounded-2xl shadow-sm bg-white flex items-center gap-3 cursor-pointer"
        >
          <r.icon className="w-6 h-6 text-[#E61A1A]" />
          <div>
            <Paragraph className="font-semibold">{r.name}</Paragraph>
            <Paragraph className="text-sm text-gray-500">{r.type}</Paragraph>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default LessonResources;
