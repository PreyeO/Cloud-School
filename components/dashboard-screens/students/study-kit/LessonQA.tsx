"use client";
import LinkButton from "@/components/ui/btns/link-button";
import Paragraph from "@/components/ui/typography/paragraph";
import { Headphones } from "lucide-react";

const LessonQA = () => {
  return (
    <div className="p-6 bg-white rounded-2xl border shadow-sm text-center space-y-4">
      <Paragraph>Have a question? We’re here to help.</Paragraph>

      <LinkButton
        href="/student/support"
        className="bg-[#E61A1A] hover:bg-[#c81818]"
      >
        <Headphones className="w-5 h-5" />
        Contact Support
      </LinkButton>
    </div>
  );
};

export default LessonQA;
