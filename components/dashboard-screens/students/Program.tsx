"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePayApplicationFee } from "@/hooks/usePayApplicationFee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bonuses, programNotice, systems } from "@/data/students";
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
          <Title className="leading-tight  md:text-4xl text-2xl">
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
            <Title className="text-xl sm:text-3xl mb-3">
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
          </div>

          {/* SIDEBAR CARD */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 shadow-sm space-y-5">
            <div className="space-y-3">
              <h3 className="font-semibold text-[#E51919] md:text-lg text-base">
                Cohort 2026 - The Next Gen
              </h3>
              <div className="flex flex-col gap-2">
                {programNotice.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between  font-bold text-sm md:text-base"
                  >
                    <h3>{item.question}</h3>
                    <h3>{item.answer}</h3>
                  </div>
                ))}
              </div>
            </div>

            <PaymentButton
              label="Apply Before Slots Fill"
              loadingLabel="Applying..."
              isPending={isPending}
              onClick={() => handlePay()}
              className="w-full mt-10"
            />
          </div>
        </motion.div>

        {/* SYSTEMS ACCORDION */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <Title className="text-xl sm:text-3xl">
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

          <Accordion
            type="single"
            collapsible
            className="space-y-3 w-full max-w-full"
          >
            {systems.map((s) => (
              <AccordionItem
                key={s.id}
                value={s.id}
                className="rounded-2xl border bg-white dark:bg-[#0b0b0b] border-gray-200 dark:border-gray-800"
              >
                <AccordionTrigger className="p-4 sm:p-5 text-base flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3 overflow-hidden">
                  {/* Left Section (icon + text) */}
                  <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0">
                    <Award className="w-6 h-6 text-[#E51919] flex-shrink-0 hidden" />

                    <div className="min-w-0">
                      <h4 className="font-semibold truncate text-sm sm:text-base md:text-lg">
                        {s.title}
                      </h4>

                      <p className="text-xs sm:text-sm md:text-base text-gray-500 truncate font-medium">
                        • {s.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button (moves under text on small screens) */}
                  <Button
                    size="sm"
                    className="rounded-xl text-sm sm:text-base whitespace-nowrap flex-shrink-0 self-stretch sm:self-auto"
                  >
                    {s.cta}
                  </Button>
                </AccordionTrigger>

                <AccordionContent className="text-base px-5 pb-5 text-gray-600 dark:text-gray-400">
                  {s.description}
                  <br />
                  <br />
                  {s.span}
                  <br />
                  <br />
                  {s.span2}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="border w-full " />
        <SubTitle> But That’s Just the Foundation…</SubTitle>
        <Paragraph className="md:pt-2 pt-0">
          Everything you’ve seen so far — the Core Offers and The Wildcard
          System™ — forms the backbone of your transformation inside Cloud Top
          G.
          <br />
          <br />
          They’re what make consistency, clarity, and results inevitable.
          <br />
          <br />
          But we didn’t stop there.
          <br />
          <br />
          Because true success in tech doesn’t just come from learning, it comes
          from having the extra edge that most people never get.
          <br />
          <br />
          That’s why we built <strong>The Cloud Top G Advantage</strong> — over
          ₦6 million worth of exclusive bonuses designed to remove every barrier
          between you and your dream career.
        </Paragraph>
        <div className="border w-full" />

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

          <div className="flex flex-col w-full px-3 sm:px-0">
            <Accordion type="single" collapsible className="w-full max-w-full">
              {bonuses.map((b) => (
                <AccordionItem
                  key={b.id}
                  value={b.id}
                  className="mb-2 rounded-2xl border bg-white border-gray-200"
                >
                  <AccordionTrigger className="p-4 sm:p-5 flex items-center gap-3 overflow-hidden">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate text-sm sm:text-base md:text-lg">
                        {b.title}
                      </h4>
                      <p className="text-xs sm:text-sm md:text-base text-gray-500 truncate font-medium">
                        {b.value}
                      </p>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="text-xs sm:text-sm md:text-base px-4 sm:px-5 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p className="font-medium pb-2">{b.subtitle}</p>
                    <p>
                      {b.description}
                      <br />
                      <br />
                      {b.span}
                      <br />
                      <br />
                      {b.span2}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              Everything you’ve seen, the systems, mentorship, and bonuses, was
              built for one purpose:{" "}
              <strong>to make your success inevitable.</strong> When you join{" "}
              <strong>Cloud Top G Cohort 2026</strong>, you’re not just getting
              training; you’re entering an ecosystem where every obstacle has a
              system, every question has an answer, and every effort leads to
              proof.
              <br />
              <br />
              That’s why Cloud Top G graduates don’t just learn, they win. And
              right now, you can still join before bonuses worth over{" "}
              <strong>₦6 million</strong> disappear when registration closes.
              <br />
              <br />
              <strong>
                Next Cohort Begins February 2026. Limited Slots Available.
              </strong>
            </Paragraph>

            <PaymentButton
              label="Apply To Unlock"
              loadingLabel="Applying..."
              isPending={isPending}
              onClick={() => handlePay()}
              className="mx-auto mt-10 max-w-[400px]"
            />
          </div>
        </motion.div>

        <div className="h-24" />
      </div>
    </section>
  );
}
