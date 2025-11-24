"use client";

import { motion } from "framer-motion";
import { Award, CalendarDays } from "lucide-react";
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
import SubTitle from "@/components/ui/typography/sub-title";

const PaymentButton = dynamic(
  () => import("@/components/ui/btns/payment-button"),
  { ssr: false }
);

export default function ProgramDetails() {
  const { mutate: handlePay, isPending } = usePayApplicationFee();

  return (
    <section className="min-h-screen md:px-10 pt-10">
      <div className="mx-auto space-y-16 max-w-6xl">
        {/* HERO TEXT ONLY NOW */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center max-w-3xl mx-auto"
        >
          <Title className="leading-tight text-3xl md:text-4xl">
            Cloud Top G Cohort 2026 — The Next Generation
          </Title>

          <Paragraph className="text-base sm:text-lg leading-relaxed">
            The 12-Month Mentorship Experience that transforms ambitious
            learners into{" "}
            <span className="font-bold">Top 1% Cloud Engineers;</span> ready to{" "}
            <span className="font-bold">earn, lead and build legacy.</span>
            <br />
            <span className="italic">
              Every tool, every skill, every step — mastered with
              accountability, mentorship, and luxury guidance.
            </span>
          </Paragraph>
        </motion.div>

        {/* ABOUT + SIDEBAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto"
        >
          {/* ABOUT */}
          <div className="space-y-4">
            <Title className="text-2xl sm:text-3xl mb-3">
              Program Overview (What you’ll experience)
            </Title>

            <Paragraph className="text-sm sm:text-base leading-relaxed">
              You won’t be learning alone or guessing your next step. This
              program blends <strong>hands-on projects</strong>,
              <strong> elite mentorship</strong>, and
              <strong> accountability systems</strong> to move you from confused
              learner to <strong>confident, job-ready cloud engineer</strong>.
              <br />
              <br />
              Across four structured semesters, you’ll master core cloud skills,
              build a <strong>verified portfolio</strong>, and follow
              <strong> clear pathways</strong> into certification, interviews,
              and <strong>your first role or freelance income,</strong>with
              safety nets if life happens..
              <br />
              <br />
              This isn’t just “classes.” It’s a{" "}
              <strong>full career system</strong> designed to keep you
              consistent, unblock you fast, and make your results{" "}
              <strong>visible, credible, and hireable</strong>.
            </Paragraph>
            <PaymentButton
              label="Apply Before Cohort Allocation Fills"
              loadingLabel="Applying..."
              isPending={isPending}
              onClick={() => handlePay()}
              className="w-full mt-3"
            />
          </div>

          {/* SIDEBAR CARD */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 shadow-sm space-y-5">
            <div className="space-y-3">
              <h3 className="font-semibold text-[#E51919] text-lg">
                Cohort 2026 - The Next Gen
              </h3>

              <Paragraph className="text-sm">
                <strong>Certificate:</strong> Diploma <br />
                <strong>Seats:</strong> Limited <br />
                <strong>Application Fee:</strong>{" "}
                <span className="">₦20,000.00</span> <br />
                <strong>Program Length:</strong> 12 months (4 semesters) <br />
                <strong>Start:</strong> 17/02/2026 <br />
                <strong>Location:</strong> Online <br />
                <strong>Live Classes:</strong> Yes <br />
                <strong>Skill Level:</strong> Beginner
              </Paragraph>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-[#E51919]" />
              <h4 className="font-semibold text-[#E51919]">
                Enrollment Timeline
              </h4>
            </div>
            <Paragraph className="text-sm">
              <span className="font-semibold">Application Opens:</span> Nov 10,
              2025 <br />
              <span className="font-semibold">Classes Begin:</span> Jan 8, 2026
            </Paragraph>
          </div>
        </motion.div>

        {/* SYSTEMS ACCORDION */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <Title className="text-2xl sm:text-3xl">
            Here’s What You Get Inside — Valued at Over ₦4.9 Million
          </Title>
          <SubTitle> The Legacy Career Accelerator™</SubTitle>

          <Paragraph>
            The system that powers Cloud Top G’s transformation
          </Paragraph>
          <Paragraph>
            The Legacy Career Accelerator™ is the engine behind Cloud Top G’s
            transformation system, the same framework that turns ambitious
            learners into disciplined, top-1 % cloud engineers.
          </Paragraph>

          <Accordion type="single" collapsible className="space-y-3">
            {systems.map((s) => (
              <AccordionItem
                key={s.id}
                value={s.id}
                className="rounded-2xl border bg-white dark:bg-[#0b0b0b] border-gray-200 dark:border-gray-800"
              >
                <AccordionTrigger className="text-base p-5 flex flex-row justify-between items-center gap-3">
                  {/* Text side with fixed width or flex-grow */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <Award className="w-6 h-6 text-[#E51919]" />
                    <div className="min-w-0">
                      <div className="font-semibold truncate  ">{s.title}</div>
                      <div className="text-sm text-gray-500 truncate">
                        • {s.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* CTA button */}
                  <Button
                    size="sm"
                    className="rounded-xl text-base whitespace-nowrap flex-shrink-0"
                  >
                    {s.cta}
                  </Button>
                </AccordionTrigger>

                <AccordionContent className="text-base px-5 pb-5 text-gray-600 dark:text-gray-400">
                  {s.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* BONUSES */}
        <div className="space-y-6 max-w-6xl mx-auto">
          <Title className="text-2xl sm:text-3xl">
            The Cloud Top G Advantage (Bonuses)
          </Title>
          <SubTitle>
            Why We’re Giving Away Over ₦6 Million in Premium Bonuses… For Free.
          </SubTitle>

          <Paragraph>
            When we started Cloud Top G, we noticed something heartbreaking —
            brilliant students were doing everything right, yet still struggling
            to finish, get certified, or land their first job.
            <br />
            <br />
            Not because they lacked skill…
            <br />
            <br />
            But because no one had designed a program that supported the entire
            journey — from learning… to mastery… to career… to legacy.
            <br />
            <br />
            So we made a decision:
            <br />
            <br />
            <span className="italic">
              If a student ever fails after joining Cloud Top G, it should never
              be because we left a gap in their support system.
            </span>
            <br />
            <br />
            That’s why these bonuses exist.
            <br />
            <br />
            They’re not add-ons… they’re the missing pieces that make success
            inevitable.
            <br />
            <br />
            Each one solves a specific roadblock you’ll face on your journey,
            from certification stress and burnout to job search confusion and
            post-graduation growth.
            <br />
            <br />
            Together, they form <strong>The Cloud Top G Advantage </strong>— a
            complete ecosystem that supports you through every stage: learning,
            mastery, career, and legacy.
            <br />
            <br />
            And yes… we give them all away for free.
            <br />
            <br />
            Because your success is our brand.
            <br />
            <br />
            When you win, we win. And that proof brings us more trust than any
            ad ever could.
            <br />
            <br />
            So instead of spending millions on marketing… we invest it in you.
            <br />
            <br />
            That’s the real reason you’re getting over ₦6 million worth of
            premium systems, coaching, and tools… completely free when you join
            Cohort 2026.
            <br />
            <br />
            Because we’re not building another course.
            <br />
            <br />
            We’re building{" "}
            <strong>
              a generation of Cloud Top G engineers who win — and keep winning.
            </strong>
          </Paragraph>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {bonuses.map((b) => (
              <Accordion
                key={b.id}
                type="single"
                collapsible
                className="space-y-3"
              >
                <AccordionItem
                  value={b.id}
                  className="text-base rounded-2xl border bg-white dark:bg-[#0b0b0b] border-gray-200 dark:border-gray-800"
                >
                  <AccordionTrigger className="p-5 flex flex-row justify-between items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{b.title}</h4>
                      <p className="text-sm text-gray-500 truncate">
                        {b.value}
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-base px-5 pb-5 text-gray-600 dark:text-gray-400">
                    {b.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="p-6 md:p-10 rounded-2xl bg-white border border-gray-200 shadow-lg max-w-4xl mx-auto"
        >
          <div className="text-center space-y-4">
            <SubTitle>Your Advantage Becomes Your Proof</SubTitle>

            <Paragraph>
              Join <strong>Cloud Top G Cohort 2026</strong> and step into an
              ecosystem where every question has an answer, every obstacle has a
              system, and every effort produces proof.
            </Paragraph>

            <Paragraph className="font-semibold">
              Next Cohort Begins February 2026 — Limited Slots Available.
            </Paragraph>

            <PaymentButton
              label="Apply To Unlock"
              loadingLabel="Applying..."
              isPending={isPending}
              onClick={() => handlePay()}
              className="mx-auto"
            />
          </div>
        </motion.div>

        <div className="h-24" />
      </div>
    </section>
  );
}
