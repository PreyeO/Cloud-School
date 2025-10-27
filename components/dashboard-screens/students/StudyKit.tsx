"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Video,
  Star,
  Download,
  PlayCircle,
  CheckCircle2,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function StudyKit() {
  const lessons = [
    {
      id: 1,
      title: "Introduction to Cloud Engineering",
      duration: "08:32",
      rating: 4.8,
      active: true,
    },
    {
      id: 2,
      title: "Understanding Cloud Models (IaaS, PaaS, SaaS)",
      duration: "12:45",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Setting Up Your Cloud Environment",
      duration: "10:14",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Deploying Your First Application",
      duration: "14:20",
      rating: 4.9,
    },
  ];

  const resources = [
    {
      type: "PDF",
      name: "Cloud Basics Guide",
      icon: FileText,
    },
    {
      type: "Slides",
      name: "Lesson 1 Presentation",
      icon: FileText,
    },
    {
      type: "Project File",
      name: "AWS Setup Instructions",
      icon: Download,
    },
  ];

  return (
    <section className="min-h-screen px-6 md:px-12 py-14  dark:from-[#0b0b0b] dark:to-[#101010]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* 🎥 Main Learning Area */}
        <div className="lg:col-span-2 space-y-10">
          {/* Video Card */}
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

            {/* Overlay Info */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex justify-between items-end">
              <div>
                <h2 className="text-lg md:text-2xl font-semibold text-white">
                  Introduction to Cloud Engineering
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-200 mt-2">
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4 text-[#E61A1A]" /> 08:32
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#FFD700]" /> 4.8
                  </span>
                </div>
              </div>
              <Button
                className="bg-[#E61A1A] hover:bg-[#c81414] text-white rounded-full px-6 py-2 font-semibold"
                size="sm"
              >
                Continue
              </Button>
            </div>
          </motion.div>

          {/* Tabs Section */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 dark:bg-[#161616] rounded-full p-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-3">
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                In this lesson, you’ll explore the foundations of Cloud
                Engineering — from what makes cloud technology revolutionary to
                how businesses deploy modern infrastructure using IaaS, PaaS,
                and SaaS models.
              </p>
            </TabsContent>

            <TabsContent
              value="resources"
              className="mt-6 grid sm:grid-cols-2 gap-4"
            >
              {resources.map((r, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl border border-gray-100 dark:border-[#1a1a1a] shadow-sm hover:shadow-md flex items-center gap-3 bg-white dark:bg-[#141414] transition-all"
                >
                  <r.icon className="w-6 h-6 text-[#E61A1A]" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">
                      {r.name}
                    </p>
                    <p className="text-xs text-gray-500">{r.type}</p>
                  </div>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="notes" className="mt-6">
              <div className="p-6 border rounded-2xl text-gray-600 dark:text-gray-300">
                You don’t have any notes yet. Use the note feature to jot down
                key insights as you learn.
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* 📚 Lesson Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Lesson Breakdown
          </h3>
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
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <Video className="w-3 h-3 text-[#E61A1A]" />{" "}
                    {lesson.duration}
                  </p>
                </div>
                {lesson.active ? (
                  <PlayCircle className="w-5 h-5 text-[#E61A1A]" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                )}
              </motion.div>
            ))}
          </div>

          <Button className="bg-[#E61A1A] hover:bg-[#c71414] text-white rounded-full w-full py-5 font-semibold shadow-md">
            Start Assessment
          </Button>
        </motion.aside>
      </div>
    </section>
  );
}
