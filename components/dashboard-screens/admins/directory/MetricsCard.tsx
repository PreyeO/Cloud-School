import React from "react";
import Paragraph from "@/components/ui/typography/paragraph";

interface BreakdownItem {
  label: string;
  value: string;
}

interface Props {
  label: string;
  value: string | React.ReactNode;
  breakdown?: BreakdownItem[];
  progress?: number; // 0-100
}

const MetricsCard: React.FC<Props> = ({
  label,
  value,
  breakdown,
  progress,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center">
      <Paragraph>{label}</Paragraph>
      <div className="mt-2 font-bold text-lg">{value}</div>
      {progress !== undefined && breakdown && (
        <div className="w-full mt-3">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-1">
            <div
              className="h-2 bg-black rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-gray-400 text-xs">
            {breakdown.map((b) => (
              <span key={b.label}>
                {b.label}: {b.value}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricsCard;
