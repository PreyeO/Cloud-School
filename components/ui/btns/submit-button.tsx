"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AuthSubmitButtonProps {
  label: string;
  loadingLabel: string;
  isPending: boolean;
  onClick?: () => void;
  className?: string;
}

const SubmitButton = ({
  label,
  loadingLabel,
  isPending,
  onClick,
  className,
}: AuthSubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isPending}
      onClick={onClick}
      className={`${className} w-full bg-[#E61A1A] text-white hover:bg-red-700 py-6 text-base font-semibold rounded-[14px]`}
    >
      {isPending ? loadingLabel : label} <ArrowRight className="size-6" />
    </Button>
  );
};

export default SubmitButton;
