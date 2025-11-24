"use client";

import { motion } from "framer-motion";
import { PlayCircle, CheckCircle2 } from "lucide-react";
import SubTitle from "@/components/ui/typography/sub-title";
import { FC } from "react";
import { Lesson } from "@/types/student";

interface LessonSidebarProps {
  lessons: Lesson[];
  activeLesson: Lesson;
  setActiveLesson: (lesson: Lesson) => void;
}

const LessonSidebar: FC<LessonSidebarProps> = ({
  lessons,
  activeLesson,
  setActiveLesson,
}) => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <SubTitle>Lesson Breakdown</SubTitle>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <motion.div
            key={lesson.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveLesson(lesson)}
            className={`p-4 rounded-2xl cursor-pointer transition-all flex justify-between items-center border 
              ${
                lesson.id === activeLesson.id
                  ? "border-[#E61A1A] bg-[#FFF5F5]"
                  : "border-gray-200 bg-white"
              }`}
          >
            <h4 className="font-medium text-sm">{lesson.title}</h4>

            {lesson.id === activeLesson.id ? (
              <PlayCircle className="w-5 h-5 text-[#E61A1A]" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-gray-300" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
};

export default LessonSidebar;
