"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // assuming you use clsx or a cn helper
import React from "react";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  className,
  onClick,
}) => {
  return (
    <Link href={href} passHref>
      <Button
        onClick={onClick}
        className={cn(
          "w-full text-white text-sm font-medium rounded-lg transition-all duration-300",
          className
        )}
      >
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
