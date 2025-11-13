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
import SupportOptionCard from "./SupportOptionCard";
import Paragraph from "@/components/ui/typography/paragraph";
import Title from "@/components/ui/typography/title";

const SupportScreen = () => {
  return (
    <section className="min-h-screen md:px-10 pt-10">
      {/* Hero Section */}
      <div className="relative flex flex-col ">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center w-full  mx-auto pb-16"
        >
          <Title>
            {" "}
            Got a <span className="text-[#E61A1A]">Question?</span> <br /> We’re
            Here to Help.
          </Title>

          <Paragraph className="w-1/2 mx-auto text-center">
            Whether you’re facing a technical glitch or need course guidance,
            our support team is ready to help you resolve it — fast.
          </Paragraph>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-10 pb-16 sm:pb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 sm:mb-14"
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
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="px-4 sm:px-6"
              >
                <AccordionTrigger className="py-4 sm:py-6 text-base font-medium hover:text-[#E61A1A] transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative py-16 sm:py-24 bg-[#0B0A0A] dark:bg-[#111] text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-[#E61A1A]/15 blur-[160px] rounded-full -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Still Need Assistance?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-14">
            Choose your preferred way to get in touch — our support experts are
            ready to help you out.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <SupportOptionCard
              icon={MessageCircle}
              title="Chat on WhatsApp"
              description="Start a quick conversation with our support team."
              buttonLabel="Message Us"
              buttonAction={() =>
                window.open("https://wa.me/2348012345678", "_blank")
              }
              iconColor="#25D366"
              buttonBg="bg-[#25D366]"
              buttonHoverBg="hover:bg-[#1EBE5D]"
            />
            <SupportOptionCard
              icon={Mail}
              title="Send an Email"
              description="For more detailed issues or documentation."
              buttonLabel="Email Support"
              buttonAction={() =>
                (window.location.href = "mailto:support@cloudtopg.com")
              }
              iconColor="#E61A1A"
              buttonTextColor="text-[#E61A1A]"
              buttonBg="bg-white"
              buttonHoverBg="hover:bg-[#E61A1A]"
            />
            <SupportOptionCard
              icon={Phone}
              title="Give Us a Call"
              description="Speak directly with one of our friendly representatives."
              buttonLabel="Call Now"
              buttonAction={() => (window.location.href = "tel:+2348012345678")}
              iconColor="white"
              buttonTextColor="text-[#0B0A0A]"
              buttonBg="bg-white"
              buttonHoverBg="hover:bg-gray-200"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportScreen;
