"use client";

import { Spinner } from "@/components/ui/spinner";

interface CardLoadingProps {
  text?: string;
  size?: "sm" | "md" | "lg";
}

const CardLoader = ({ text, size = "md" }: CardLoadingProps) => {
  const sizeClass =
    size === "sm" ? "size-4" : size === "lg" ? "size-8" : "size-6"; // default medium

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <Spinner className={`${sizeClass} text-[#E51919]`} />
      {text && <p className="mt-3 text-gray-600 text-sm font-medium">{text}</p>}
    </div>
  );
};
export default CardLoader;
