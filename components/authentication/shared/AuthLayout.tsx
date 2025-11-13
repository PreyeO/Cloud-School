"use client";

import React from "react";
import AuthTabs from "@/components/authentication/shared/AuthTabs";
import TestimonialCarousel from "@/components/authentication/shared/TestimonialCarousel";

interface AuthLayoutProps {
  children: React.ReactNode;
  showTabs?: boolean;
  className?: string;
}

const AuthLayout = ({
  children,
  showTabs = true,
  className = "",
}: AuthLayoutProps) => {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white font-Bricolage_grotesque">
      <TestimonialCarousel />
      <div className="flex flex-col items-center justify-center w-full px-6 py-12">
        {showTabs && <AuthTabs />}
        <div className={`w-full max-w-[588px] mt-6 ${className}`}>
          {children}
        </div>
      </div>
    </main>
  );
};
export default AuthLayout;
