"use client";

import LessonSidebar from "./LessonSidebar";
import LessonTabs from "./LessonTabs";
import { motion } from "framer-motion";

export default function StudyKit() {
  return (
    <section className="p-4 sm:p-6 md:p-10   min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-gray-100 dark:border-[#1a1a1a] shadow-xl"
          >
            <iframe
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="Lesson Video"
              className="w-full aspect-video"
              allowFullScreen
            ></iframe>
          </motion.div>
          <LessonTabs />
        </div>
        <LessonSidebar />
      </div>
    </section>
  );
}
