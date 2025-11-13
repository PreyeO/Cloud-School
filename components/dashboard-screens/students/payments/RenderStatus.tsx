import { CheckCircle2, XCircle, Clock } from "lucide-react";

export const renderStatus = (status: string) => {
  const s = status?.toLowerCase();

  if (s === "success" || s === "successful")
    return (
      <span className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-green-600 dark:text-green-300">
        <CheckCircle2 className="w-4 h-4" /> Successful
      </span>
    );

  if (s === "failed" || s === "abandoned")
    return (
      <span className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-red-600 dark:text-red-400">
        <XCircle className="w-4 h-4" /> Failed
      </span>
    );

  return (
    <span className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-yellow-600 dark:text-yellow-400">
      <Clock className="w-4 h-4" /> Pending
    </span>
  );
};
