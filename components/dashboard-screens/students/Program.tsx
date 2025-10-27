"use client";

import { motion } from "framer-motion";
import {
  PlayCircle,
  Clock,
  Award,
  Users,
  Laptop,
  CheckCircle,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramDetails() {
  const benefits = [
    {
      icon: Award,
      title: "Globally Recognized Certificate",
      desc: "Earn an industry-approved diploma accepted by top companies worldwide.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      desc: "Learn directly from engineers and cloud architects with years of experience.",
    },
    {
      icon: Laptop,
      title: "Real Projects",
      desc: "Work on production-level projects that strengthen your portfolio.",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      desc: "Choose between online and hybrid learning at your own pace.",
    },
  ];

  const curriculum = [
    {
      title: "Module 1: Cloud Fundamentals",
      topics: [
        "Introduction to Cloud Computing",
        "IaaS, PaaS & SaaS Explained",
        "Setting up Cloud Environments",
      ],
    },
    {
      title: "Module 2: Linux & Networking Essentials",
      topics: [
        "Linux Command Line",
        "File System Management",
        "Networking & Security Basics",
      ],
    },
    {
      title: "Module 3: AWS & DevOps Foundation",
      topics: [
        "AWS Core Services",
        "CI/CD Pipelines",
        "Infrastructure Monitoring & Deployment",
      ],
    },
  ];

  return (
    <section className="relative px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Side */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Cloud Engineering Program
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Learn Cloud, DevOps, and automation from experts. A structured
              6-month journey from beginner to job-ready Cloud Engineer.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { label: "Duration", value: "6 Months" },
                { label: "Mode", value: "Online / Hybrid" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {item.value}
                  </h4>
                </div>
              ))}
            </div>

            <Button className="bg-[#E51919] hover:bg-[#c91414] text-white text-lg font-semibold py-6 px-10 rounded-2xl shadow-md hover:scale-105 transition-all">
              Enroll Now
            </Button>
          </div>

          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4"
                title="Program Intro"
                allowFullScreen
                className="w-full h-full rounded-3xl"
              ></iframe>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all">
              <PlayCircle className="h-16 w-16 text-white" />
            </div>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              About the Program
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This intensive program covers cloud infrastructure, DevOps tools,
              and automation — preparing you to work confidently with real-world
              systems. You’ll learn by doing, with mentorship and
              performance-based projects.
            </p>
          </div>

          {/* Updated Info Card */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-[#E51919]" />
              <h3 className="font-semibold text-[#E51919]">
                Enrollment Timeline
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <span className="font-semibold text-gray-900 dark:text-white">
                Application Opens:
              </span>{" "}
              Nov 10, 2025 <br />
              <span className="font-semibold text-gray-900 dark:text-white">
                Classes Begin:
              </span>{" "}
              Jan 8, 2026
            </p>

            <div>
              <h3 className="font-semibold text-[#E51919] mb-3">
                What You’ll Get
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                {[
                  "Industry-Standard Projects",
                  "Mentorship from Cloud Engineers",
                  "Weekly Reviews & Feedback",
                  "Lifetime Community Access",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#E51919]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
            Why Choose This Program
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <Icon className="h-8 w-8 text-[#E51919] mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
            Program Curriculum
          </h2>
          <div className="space-y-6">
            {curriculum.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-[#E51919] mb-3">
                  {module.title}
                </h3>
                <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400 space-y-1">
                  {module.topics.map((topic, j) => (
                    <li key={j}>{topic}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button className="bg-[#E51919] hover:bg-[#c91414] text-white text-lg font-semibold py-6 px-10 rounded-2xl shadow-md hover:scale-105 transition-all">
            Enroll Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
