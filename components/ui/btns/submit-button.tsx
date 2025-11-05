"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthSubmitButtonProps {
  label: string;
  loadingLabel?: string;
  isPending: boolean;
  onClick?: () => void;
  className?: string;
}

const SubmitButton = ({
  label,
  loadingLabel = "Processing...",
  isPending,
  onClick,
  className,
}: AuthSubmitButtonProps) => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      disabled={isPending}
      className={cn(
        "relative w-full flex items-center justify-center gap-2 bg-[#E61A1A] text-white hover:bg-red-700 py-6 text-base font-semibold rounded-[14px] transition-all duration-200 ease-in-out",
        isPending && "opacity-80 cursor-not-allowed",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isPending ? (
          <motion.span
            key="loading"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            <Loader2 className="size-5 animate-spin" />
            {loadingLabel}
          </motion.span>
        ) : (
          <motion.span
            key="label"
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {label}
            <ArrowRight className="size-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default SubmitButton;
