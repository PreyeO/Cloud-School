"use client";

import React from "react";

interface Props {
  status?: string;
}

const StatusBadge: React.FC<Props> = React.memo(({ status }) => {
  const s = (status ?? "").toLowerCase();
  const statusColor =
    s === "admitted"
      ? "bg-green-100 text-green-800"
      : s === "enrolled"
      ? "bg-blue-100 text-blue-800"
      : s === "applied"
      ? "bg-red-100 text-red-800"
      : "bg-gray-50 text-gray-700";

  return (
    <span
      className={`inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs font-medium ${statusColor}`}
    >
      {s === "admitted"}
      {s === "applied"}
      <span className="capitalize">{status ?? "N/A"}</span>
    </span>
  );
});

StatusBadge.displayName = "StatusBadge";
export default StatusBadge;
