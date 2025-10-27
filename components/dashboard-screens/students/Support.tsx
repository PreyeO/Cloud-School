"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MessageCircle,
  Headphones,
  Monitor,
  Clock,
} from "lucide-react";

export default function SupportScreen() {
  const faqs = [
    {
      q: "How do I access my course materials after enrollment?",
      a: "After enrollment, your videos, notes, and assessments are instantly available in your dashboard — accessible across all devices.",
    },
    {
      q: "Can I get a refund if I’m not satisfied?",
      a: "Yes. Refunds are available within 7 days of purchase if less than 20% of the course has been completed.",
    },
    {
      q: "How can I contact support?",
      a: "Reach us via WhatsApp, email, or phone. Our team responds within 24 hours on weekdays.",
    },
    {
      q: "Is the platform mobile-friendly?",
      a: "Absolutely. Our platform is fully optimized for mobile, tablet, and desktop experiences.",
    },
    {
      q: "Do I get a certificate after completing my program?",
      a: "Yes. Once your assessments are completed, your digital certificate is auto-generated in your dashboard.",
    },
  ];

  return (
    <section className="min-h-screen text-[#0B0A0A] dark:text-white transition-all duration-300">
      {/* 🧩 Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-28 overflow-hidden">
        {/* Background gradient blob */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E61A1A]/5 dark:bg-[#E61A1A]/10 blur-[120px] rounded-full -z-10" />

        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Got a <span className="text-[#E61A1A]">Question?</span>
            <br />
            We’re Here to Help.
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Whether you’re facing a technical glitch or need course guidance,
            our support team is ready to help you resolve it — fast.
          </p>
        </motion.div>

        {/* Floating illustration / card cluster */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 md:mt-0 relative w-full md:w-1/2 flex justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E61A1A]/5 to-transparent blur-3xl rounded-full -z-10" />
          <div className="bg-white/90 dark:bg-white/5 backdrop-blur-xl border border-gray-200/20 dark:border-white/10 p-10 rounded-3xl shadow-lg w-[90%] md:w-[420px]">
            <h3 className="font-semibold text-lg mb-6 text-center">
              Quick Support Options
            </h3>
            <div className="space-y-4">
              {/* Inside Quick Support Options */}
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#E61A1A]" /> Phone Support
                </span>
                <span className="font-medium ">24/7</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366] " /> Live
                  Chat
                </span>
                <span className="font-medium ">Instant</span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 " /> Email Assistance
                </span>
                <span className="font-medium ">Same Day</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🧠 FAQ Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-14"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="bg-white dark:bg-[#111111] rounded-3xl border border-gray-100 dark:border-[#1a1a1a] shadow-sm">
          <Accordion
            type="single"
            collapsible
            className="divide-y dark:divide-[#1c1c1c]"
          >
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="px-6">
                <AccordionTrigger className="py-6 text-base font-medium hover:text-[#E61A1A] transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* 🌐 Contact Section */}
      <div className="relative py-24 bg-[#0B0A0A] dark:bg-[#111] text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#E61A1A]/15 blur-[160px] rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Need Assistance?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-14">
            Choose your preferred way to get in touch — our support experts are
            ready to help you out.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* WhatsApp */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-4 text-[#25D366]" />
              <h3 className="font-semibold mb-2">Chat on WhatsApp</h3>
              <p className="text-sm text-gray-400 mb-6">
                Start a quick conversation with our support team.
              </p>
              <Button
                onClick={() =>
                  window.open("https://wa.me/2348012345678", "_blank")
                }
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium rounded-xl px-6 py-2"
              >
                Message Us
              </Button>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-[#E61A1A]" />
              <h3 className="font-semibold mb-2">Send an Email</h3>
              <p className="text-sm text-gray-400 mb-6">
                For more detailed issues or documentation.
              </p>
              <Button
                variant="outline"
                onClick={() =>
                  (window.location.href = "mailto:support@letscr8t.com")
                }
                className="border-[#E61A1A] text-[#E61A1A] hover:bg-[#E61A1A] hover:text-white font-medium rounded-xl px-6 py-2"
              >
                Email Support
              </Button>
            </motion.div>

            {/* Call */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-white" />
              <h3 className="font-semibold mb-2">Give Us a Call</h3>
              <p className="text-sm text-gray-400 mb-6">
                Speak directly with one of our friendly representatives.
              </p>
              <Button
                onClick={() => (window.location.href = "tel:+2348012345678")}
                className="bg-white text-[#0B0A0A] hover:bg-gray-200 font-medium rounded-xl px-6 py-2"
              >
                Call Now
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
