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
import { bonuses, systems } from "@/data/students";
import Title from "@/components/ui/typography/title";
import Paragraph from "@/components/ui/typography/paragraph";
import dynamic from "next/dynamic";
const PaymentButton = dynamic(
  () => import("@/components/ui/btns/payment-button"),
  { ssr: false }
);

export default function ProgramDetails() {
  const { mutate: handlePay, isPending } = usePayApplicationFee();

  return (
    <section className="min-h-screen p-4 sm:p-8">
      <div className="mx-auto space-y-12 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          {/* Text Side */}
          <div className="space-y-6">
            <Title className="leading-tight">
              Cloud Top G Cohort 2026 — The Next Generation
            </Title>

            <Paragraph className="text-base sm:text-lg leading-relaxed">
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
            </Paragraph>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
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
          </div>

          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 w-full"
          >
            <div className="aspect-video w-full">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          <div>
            <Title className="text-2xl sm:text-3xl mb-4">
              About the Program
            </Title>
            <Paragraph className="text-sm sm:text-base leading-relaxed">
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
              and
              <strong> your first role or freelance income</strong>, with safety
              nets if life happens.
              <br />
              <br />
              This isn’t just “classes.” It’s a{" "}
              <strong>full career system</strong>
              designed to keep you consistent, unblock you fast, and make your
              results visible, credible, and hireable.
            </Paragraph>
          </div>

          {/* Info Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-[#E51919]" />
              <h3 className="font-semibold text-[#E51919]">
                Enrollment Timeline
              </h3>
            </div>
            <Paragraph className="text-sm">
              <span className="font-semibold text-gray-900 dark:text-white">
                Application Opens:
              </span>{" "}
              Nov 10, 2025 <br />
              <span className="font-semibold text-gray-900 dark:text-white">
                Classes Begin:
              </span>{" "}
              Jan 8, 2026
            </Paragraph>

            <div>
              <h3 className="font-semibold text-[#E51919] mb-3">
                Here’s What You Get Inside — Valued at Over ₦4.9 Million
              </h3>
              <Paragraph className="text-sm">
                Certificate: Diploma • Seats: Limited • Application Fee:{" "}
                <span className="line-through">N20,000.00</span>
              </Paragraph>
              <Paragraph className="text-sm mt-2">
                Program Length: 12 months (4 semesters) • Start: Feb 17, 2026 •
                Location: Online • Live Classes: Yes • Skill Level: Beginner
              </Paragraph>
            </div>

            <PaymentButton
              label="Apply Now"
              loadingLabel="Applying..."
              isPending={isPending}
              onClick={() => handlePay()}
              className="w-full text-[11px] text-base  rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Legacy Career Accelerator Accordion */}
        <div className="space-y-6">
          <Title className="text-2xl sm:text-3xl">
            The Legacy Career Accelerator™
          </Title>
          <Paragraph>
            The system that powers Cloud Top G’s transformation — the engine
            that turns ambitious learners into disciplined, top-1% cloud
            engineers.
          </Paragraph>

          <div className="space-y-3">
            <Accordion type="single" collapsible className="space-y-3">
              {systems.map((s) => (
                <AccordionItem
                  key={s.id}
                  value={s.id}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] overflow-hidden"
                >
                  <AccordionTrigger className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 text-left gap-3 sm:gap-0">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <Award className="w-6 h-6 text-[#E51919]" />
                      <div>
                        <div className="font-semibold">{s.title}</div>
                        <div className="text-xs text-gray-500">
                          {s.value} • {s.subtitle}
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="px-3 py-2 rounded-xl mt-2 sm:mt-0 lg:text-base text-sm text-[10px]"
                    >
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

        {/* Cloud Top G Advantage - Bonuses */}
        <div className="space-y-6">
          <Title className="text-2xl sm:text-3xl">
            The Cloud Top G Advantage (Bonuses)
          </Title>
          <Paragraph>
            Over ₦6 million worth of premium bonuses included free to remove
            every barrier between you and your dream career.
          </Paragraph>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {bonuses.map((b) => (
              <div
                key={b.id}
                className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] p-5"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-semibold">{b.title}</h4>
                    <p className="text-xs text-gray-500">{b.value}</p>
                  </div>
                  <div className="text-right">
                    <Paragraph className="text-sm">{b.description}</Paragraph>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Button
                    size="sm"
                    onClick={() => console.log(b.cta)}
                    className="rounded-xl xl:text-base lg:text-sm text-[10px]"
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
          className="md:p-8 p-4 rounded-2xl bg-white border border-gray-200 shadow-lg"
        >
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <Title className="md:text-2xl text-xl">
              Your Advantage Becomes Your Proof
            </Title>
            <Paragraph>
              When you join <strong>Cloud Top G Cohort 2026</strong>, you’re not
              just getting training. You’re stepping into an ecosystem where
              every obstacle has a system, every question has an answer, and
              every effort leads to proof.
            </Paragraph>

            <Paragraph className="text-gray-700 dark:text-gray-300 font-semibold">
              Next Cohort Begins February 2026 — Limited Slots Available.
            </Paragraph>

            <PaymentButton
              label="Apply To Unlock ₦6M Worth of Free Bonuses"
              loadingLabel="Applying..."
              isPending={isPending}
              onClick={() => handlePay()}
              className=" sm:w-auto mx-auto text-[11px] text-base  text-white rounded-2xl"
            />
          </div>
        </motion.div>

        <div className="h-24" />
      </div>
    </section>
  );
}
