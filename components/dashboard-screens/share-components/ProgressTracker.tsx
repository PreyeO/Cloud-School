"use client";

import { Check } from "lucide-react";

type Step = {
  title: string;
  done: boolean;
  icon: React.ReactNode;
};

type ProgressTrackerProps = {
  steps: Step[];
};

export default function ProgressTracker({ steps }: ProgressTrackerProps) {
  const completedSteps = steps.filter((step) => step.done).length;

  return (
    <div className="relative mb-10">
      {/* Background Line */}
      <div className="absolute top-5 left-5 right-5 h-1 bg-gray-300 z-0 rounded-full"></div>

      {/* Filled Line */}
      <div
        className="absolute top-5 left-5 h-1 bg-[#E61A1A] z-0 rounded-full transition-all duration-500"
        style={{
          width: ((completedSteps - 1) / (steps.length - 1)) * 100 + "%",
        }}
      ></div>

      {/* Step Circles */}
      <div className="flex justify-between items-center relative z-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                step.done
                  ? "bg-[#E61A1A] text-white border-[#E61A1A]"
                  : "bg-white text-gray-500 border-gray-300"
              }`}
            >
              {step.done ? <Check className="h-5 w-5" /> : step.icon}
            </div>
            <span className="mt-2 text-center text-sm font-medium">
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
