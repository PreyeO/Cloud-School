"use client";

import { motion } from "framer-motion";
import { PlayCircle, Award, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePayApplicationFee } from "@/hooks/usePayApplicationFee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProgramDetails() {
  const { mutate: handlePay, isPending } = usePayApplicationFee();

  const systems = [
    {
      id: "a-player",
      title: "The A-Player Accountability System™",
      value: "₦600,000 Value",
      subtitle: "Build Top 1 % Consistency in 90 Days",
      description:
        "The A-Player Accountability System™ gives you the structure, mentorship, and push to stay consistent. It combines a personal accountability concierge, gamified progress tracking, and weekly mentor syncs that keep your focus sharp and your goals visible every single week.",
      cta: "Secure Your Accountability Concierge",
    },
    {
      id: "unstuck",
      title: "The Unstuck Mentor Line™",
      value: "₦599,990 Value",
      subtitle: "Get Expert Help in 60 Minutes or Less",
      description:
        "Instant access to expert help whenever confusion strikes — from live mentor calls to quick voice notes and video walkthroughs. Direct 1:1 mentor access, SOS support and a 24/7 AI assistant trained on real mentor responses.",
      cta: "Secure Unstuck Mentor Line",
    },
    {
      id: "focus",
      title: "The Focus Blueprint™",
      value: "₦450,000 Value",
      subtitle: "Design Your Perfect Study System in 7 Days",
      description:
        "A mentor-guided time audit, a custom week-by-week study plan, and fail-safe reset calls that help you bounce back anytime life interrupts your flow.",
      cta: "Get Your Personal Study Blueprint",
    },
    {
      id: "bounce-back",
      title: "The Bounce-Back Blueprint™",
      value: "₦500,000 Value",
      subtitle: "Get Back on Track in 7 Days",
      description:
        "A personalized recap brief, a one-on-one catch-up call, and a custom 7-day comeback plan built with your mentor — plus a buddy system that keeps you accountable until you’re fully back in rhythm.",
      cta: "Rebuild My Momentum",
    },
    {
      id: "wildcard",
      title: "The Wildcard System™",
      value: "₦2,250,000 Value",
      subtitle: "The Always-On Backup That Turns Setbacks Into Stepping Stones",
      description:
        "Rapid project rescue sessions, mindset resets, 24/7 tech support, and new evolving mini-systems designed to handle anything that could slow you down.",
      cta: "Unlock My Wildcard Access",
    },
  ];

  const bonuses = [
    {
      id: "career-roi",
      title: "Career & ROI Transformation Suite™",
      value: "₦850,000 Value",
      description:
        "A 90-day roadmap that helps you launch your career, track income goals, and stay guided until you win. Your post-program safety net so you never have to guess what comes next.",
      cta: "Activate My Career Transformation Suite",
    },
    {
      id: "cert-fast",
      title: "60-Minute Cloud Certification Fast-Track System™",
      value: "₦650,000 Value",
      description:
        "Personalized certification plan, mock exams, and 1:1 mentor guidance that fast-tracks your prep for AWS, Azure, or GCP.",
      cta: "Fast-Track My Certification Plan",
    },
    {
      id: "mastery-proof",
      title: "Cloud Mastery & Proof Accelerator™",
      value: "₦700,000 Value",
      description:
        "Work on mentor-led projects and architecture challenges that mirror real company systems. Walk away with a verified portfolio of work.",
      cta: "Build My Cloud Mastery Portfolio",
    },
    {
      id: "job-14",
      title: "14-Day Job Placement Blueprint™",
      value: "₦600,000 Value",
      description:
        "A clear, mentor-guided plan to package your portfolio, polish LinkedIn, and apply the right way so you move from learning to earning fast.",
      cta: "Activate My Job Placement Blueprint",
    },
    {
      id: "90-role",
      title: "90-Day Role Mastery Mentorship™",
      value: "₦600,000 Value",
      description:
        "Paired with a seasoned engineer who guides you through your first 90 days, helping you solve real challenges and build confidence on the job.",
      cta: "Activate My Role Mastery Mentorship",
    },
    {
      id: "path-navigator",
      title: "60-Minute Career Path Navigator™",
      value: "₦500,000 Value",
      description:
        "A focused session where a mentor helps you analyze strengths, review progress, and map the exact specialization that matches your goals.",
      cta: "Find My Cloud Career Path",
    },
    {
      id: "mastermind",
      title: "Lifetime Mastermind Access™",
      value: "₦700,000 Value",
      description:
        "A private network of mentors, engineers, and alumni who share job leads, collaborate on projects, and grow together long after graduation.",
      cta: "Join the Mastermind Network",
    },
    {
      id: "interview-bootcamp",
      title: "4-Week Cloud Interview Mastery Bootcamp™",
      value: "₦500,000 Value",
      description:
        "Mock interviews, feedback sessions, and mentor-led coaching that sharpen how you speak, think, and perform under pressure.",
      cta: "Start My Interview Mastery Bootcamp",
    },
    {
      id: "legacy-builder",
      title: "Legacy Builder System™",
      value: "₦600,000 Value",
      description:
        "Build a personal brand that showcases expertise, authority, and results with mentor guidance on storytelling, profile optimization, and content creation.",
      cta: "Build My Cloud Legacy",
    },
    {
      id: "shadow-pro",
      title: "Shadow-the-Pro Experience™",
      value: "₦600,000 Value",
      description:
        "Sit front-row as senior engineers build and troubleshoot live systems, explaining every move and decision so you learn to think like a pro.",
      cta: "Join the Shadow-the-Pro Experience",
    },
  ];

  return (
    <section className="relative px-6 md:px-12 py-20">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Side */}
          <div className="space-y-6">
            <h1 className="text-4xl  font-bold text-gray-900 dark:text-white leading-tight">
              Cloud Top G Cohort 2026 — The Next Generation
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              The 12-Month Mentorship Experience that transforms ambitious
              learners into{" "}
              <span className="font-bold">Top 1 % Cloud Engineers;</span> ready
              to{" "}
              <span className="font-bold">earn, lead, and build legacy.</span>
              <br />
              <span className="italic">
                Every tool, every skill, every step — mastered with
                accountability, mentorship, and luxury guidance.
              </span>
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { label: "Duration", value: "12 Months (4 semesters)" },
                { label: "Mode", value: "Online" },
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

            <Button
              onClick={() => handlePay()}
              disabled={isPending}
              className="mt-6 sm:mt-8 w-full bg-[#E51919] hover:bg-[#c91414] text-white rounded-2xl font-semibold text-base sm:text-lg py-4 sm:py-5 md:py-6 transition-all duration-300 shadow-md"
            >
              {isPending
                ? "Processing..."
                : "Apply Before Cohort Allocation Fills"}
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

        {/* About & Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              About the Program
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              You won’t be learning alone or guessing your next step. This
              program blends <strong>hands-on projects</strong>,{" "}
              <strong>elite mentorship</strong>, and{" "}
              <strong>accountability systems</strong> to move you from confused
              learner to <strong>confident, job-ready cloud engineer</strong>.
              <br />
              <br />
              Across four structured semesters, you’ll master core cloud skills,
              build a <strong>verified portfolio</strong>, and follow{" "}
              <strong>clear pathways</strong> into certification, interviews,
              and <strong>your first role or freelance income</strong>, with
              safety nets if life happens.
              <br />
              <br />
              This isn’t just “classes.” It’s a{" "}
              <strong>full career system</strong> designed to keep you
              consistent, unblock you fast, and make your results visible,
              credible, and hireable.
            </p>
          </div>

          {/* Info Card */}
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
                Here’s What You Get Inside — Valued at Over ₦4.9 Million
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Certificate: Diploma • Seats: Limited • Application Fee:{" "}
                <span className="line-through">N20,000.00</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Program Length: 12 months (4 semesters) • Start: Feb 17, 2026 •
                Location: Online • Live Classes: Yes • Skill Level: Beginner
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Button
                onClick={() => handlePay()}
                disabled={isPending}
                className="w-full bg-[#E51919] hover:bg-[#c91414] text-white rounded-xl"
              >
                Apply Now
              </Button>
              <Button
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
                className="w-full rounded-xl"
              >
                Read Full Program
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Legacy Career Accelerator Accordion */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            The Legacy Career Accelerator™
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The system that powers Cloud Top G’s transformation — the engine
            that turns ambitious learners into disciplined, top-1% cloud
            engineers.
          </p>

          <div className="space-y-3">
            <Accordion type="single" collapsible className="space-y-3">
              {systems.map((s) => (
                <AccordionItem
                  key={s.id}
                  value={s.id}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] overflow-hidden"
                >
                  <AccordionTrigger className="w-full flex items-center justify-between p-5 text-left">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-[#E51919]" />
                      <div>
                        <div className="font-semibold">{s.title}</div>
                        <div className="text-xs text-gray-500">
                          {s.value} • {s.subtitle}
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="px-3 py-2 rounded-xl">
                      {s.cta}
                    </Button>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-gray-600 dark:text-gray-400">
                    {s.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Cloud Top G Advantage - Bonuses Accordion */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            The Cloud Top G Advantage (Bonuses)
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Over ₦6 million worth of premium bonuses included free to remove
            every barrier between you and your dream career.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {bonuses.map((b) => (
              <div
                key={b.id}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold">{b.title}</h4>
                    <p className="text-xs text-gray-500">{b.value}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {b.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Button
                    size="sm"
                    onClick={() => console.log(b.cta)}
                    className="rounded-xl"
                  >
                    {b.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Proof + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg"
        >
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <h3 className="text-2xl font-semibold">
              Your Advantage Becomes Your Proof
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When you join <strong>Cloud Top G Cohort 2026</strong>, you’re not
              just getting training. You’re stepping into an ecosystem where
              every obstacle has a system, every question has an answer, and
              every effort leads to proof.
            </p>

            <p className="text-gray-700 dark:text-gray-300 font-semibold">
              Next Cohort Begins February 2026 — Limited Slots Available.
            </p>

            <Button
              onClick={() => handlePay()}
              disabled={isPending}
              className=" bg-[#E51919] hover:bg-[#c91414] text-white rounded-2xl"
            >
              Apply Now &amp; Unlock ₦6M Worth of Free Bonuses
            </Button>
          </div>
        </motion.div>

        <div className="h-24" />
      </div>
    </section>
  );
}
