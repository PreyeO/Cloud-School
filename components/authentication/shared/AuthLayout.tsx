"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthTabs from "@/components/authentication/shared/AuthTabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role?: string;
  avatarSrc?: string;
  quote: string;
}

interface AuthLayoutProps {
  children: React.ReactNode;
  showTabs?: boolean;
  className?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    avatarSrc: "https://github.com/shadcn.png",
    quote: "This platform completely transformed our workflow!",
  },
  {
    name: "John Smith",
    avatarSrc: "https://github.com/evilrabbit.png",
    quote: "The UX is so intuitive, I wish all apps were like this.",
  },
  {
    name: "Mary Johnson",
    avatarSrc: "https://github.com/shadcn.png",
    quote: "Working with this team was seamless and professional.",
  },
];

export default function AuthLayout({
  children,
  showTabs = true,
  className = "",
}: AuthLayoutProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTime = 8000; // 8 seconds

  // Auto cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, displayTime);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white font-Bricolage_grotesque">
      {/* Testimonial Section */}
      <div className="hidden lg:flex relative flex-col justify-center items-center bg-[#F9BABA] rounded-r-3xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-10"
          >
            <div className="flex">
              <Quote className="" />

              <p className="text-xl text-black italic mb-8 max-w-[400px]">
                {currentTestimonial.quote}
              </p>
            </div>
            <Avatar className="mb-4 w-24 h-24">
              {currentTestimonial.avatarSrc ? (
                <AvatarImage
                  src={currentTestimonial.avatarSrc}
                  alt={currentTestimonial.name}
                />
              ) : (
                <AvatarFallback>{currentTestimonial.name[0]}</AvatarFallback>
              )}
            </Avatar>
            <h3 className="text-lg font-semibold text-gray-900">
              {currentTestimonial.name}
            </h3>

            {/* Dots navigation just under role */}
            <div className="flex space-x-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-[#E51919] w-5"
                      : "bg-white border border-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Optional subtle gradient/shape decorations */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#E51919] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E51919] rounded-full opacity-15 translate-x-1/3 translate-y-1/3 animate-pulse"></div>
      </div>

      {/* Auth Form Section */}
      <div className="flex flex-col items-center justify-center w-full px-6 py-12">
        {showTabs && <AuthTabs />}
        <div className={`w-full max-w-[588px] mt-6 ${className}`}>
          {children}
        </div>
      </div>
    </main>
  );
}
