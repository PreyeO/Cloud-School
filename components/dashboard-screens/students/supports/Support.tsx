"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { faqs } from "@/data/students";
import Paragraph from "@/components/ui/typography/paragraph";
import Title from "@/components/ui/typography/title";

const SupportScreen = () => {
  return (
    <section className="min-h-screen px-6 md:px-12 pt-20 pb-32 ">
      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-24"
      >
        <Title className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Need Support? <span className="text-[#E61A1A]">We’ve Got You.</span>
        </Title>

        <Paragraph className="text-gray-600 max-w-xl mx-auto mb-8">
          Get quick help with issues relating to your account, payments, or
          learning experience. Choose a support channel and our team will
          respond shortly.
        </Paragraph>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => window.open("https://wa.me/2349079778199", "_blank")}
            className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <MessageCircle size={18} /> WhatsApp Support
          </button>

          <button
            onClick={() => {
              window.open(`mailto:support@cloudtopg.com`, "_self");
            }}
            className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-sm hover:bg-black transition"
          >
            <Mail size={18} /> Email Us
          </button>

          <button
            onClick={() => (window.location.href = "tel:+2349079778199")}
            className="flex items-center gap-2 bg-white border px-5 py-3 rounded-xl shadow-sm hover:bg-gray-100 transition"
          >
            <Phone size={18} /> Call Support
          </button>
        </div>
      </motion.div>
      {/* ================= FAQ ================= */}
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="rounded-2xl bg-white shadow-sm border"
        >
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="px-6 py-4 font-medium text-base text-left hover:text-[#E61A1A]">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* ================= CONTACT DIRECTORY ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-24"
      >
        <div className="bg-white rounded-2xl shadow-sm border p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Contact Directory
          </h2>

          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-[#25D366]" size={26} />
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <p className="text-gray-600 text-sm">+234 907 977 8199</p>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open("https://wa.me/2349079778199", "_blank")
                }
                className="text-sm bg-[#25D366] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
              >
                Chat
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border">
              <div className="flex items-center gap-3">
                <Mail className="text-[#E61A1A]" size={26} />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600 text-sm break-all">
                    support@cloudtopg.com
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  (window.location.href = "mailto:support@cloudtopg.com")
                }
                className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition"
              >
                Send Email
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border">
              <div className="flex items-center gap-3">
                <Phone className="text-[#E61A1A]" size={26} />
                <div>
                  <p className="font-semibold text-gray-900">Phone Call</p>
                  <p className="text-gray-600 text-sm">+234 907 977 8199</p>
                </div>
              </div>

              <button
                onClick={() => (window.location.href = "tel:+2349079778199")}
                className="text-sm border text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= MOBILE QUICK BAR ================= */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:hidden">
        <div className="bg-white shadow-lg rounded-xl p-4 flex items-center justify-between border">
          <button
            onClick={() => window.open("https://wa.me/2349079778199", "_blank")}
            className="flex-1 py-2 text-center font-medium text-green-600"
          >
            WhatsApp
          </button>
          <div className="w-px h-6 bg-gray-300" />
          <button
            onClick={() =>
              (window.location.href = "mailto:support@cloudtopg.com")
            }
            className="flex-1 py-2 text-center font-medium text-[#E61A1A]"
          >
            Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportScreen;
