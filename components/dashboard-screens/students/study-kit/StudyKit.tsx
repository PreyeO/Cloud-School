"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LessonSidebar from "./LessonSidebar";
import LessonTabs from "./LessonTabs";
import { lessons } from "@/data/students";

export default function StudyKit() {
  const [activeLesson, setActiveLesson] = useState(lessons[0]);

  return (
    <section className="min-h-screen md:px-10 pt-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* LEFT: Video + Overview + Resources */}
        <div className="lg:col-span-2 space-y-10">
          {/* VIDEO */}
          <motion.div
            key={activeLesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-xl"
          >
            <iframe
              src={activeLesson.video}
              className="w-full aspect-video"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* TABS (Overview, Resources, Q&A) */}
          <LessonTabs lesson={activeLesson} />
        </div>

        {/* RIGHT: Sidebar */}
        <LessonSidebar
          lessons={lessons}
          activeLesson={activeLesson}
          setActiveLesson={setActiveLesson}
        />
      </div>
    </section>
  );
}
