"use client";

import Paragraph from "@/components/ui/typography/paragraph";
import { FC } from "react";

interface LessonOverviewProps {
  title: string;
  duration: string;
  difficulty: string;
  overview: string;
  whatYouWillLearn: string[];
}

const LessonOverview: FC<LessonOverviewProps> = ({
  title,
  duration,
  difficulty,
  overview,
  whatYouWillLearn,
}) => {
  return (
    <div className="mt-6 space-y-6">
      {/* TOP INFO */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>

        <div className="flex flex-col gap-4 text-gray-600 text-sm">
          <span>
            <strong>Duration:</strong> {duration}
          </span>
          <span>
            <strong>Difficulty:</strong> {difficulty}
          </span>
        </div>
      </div>

      {/* OVERVIEW TEXT */}
      <Paragraph>{overview}</Paragraph>

      {/* WHAT YOU WILL LEARN */}
      <div className="mt-8">
        <h3 className="font-semibold mb-3 text-lg">
          What This Video Prepares You For
        </h3>

        <div className="space-y-2">
          {whatYouWillLearn.map((point, index) => (
            <p key={index} className="text-gray-700 leading-relaxed pb-8">
              {point}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonOverview;
