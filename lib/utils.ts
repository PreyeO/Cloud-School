import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { User } from "@/types/auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateString?: string) => {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const getUserId = (u: User) => u._id ?? `${u.email ?? Math.random()}`;

export const formatName = (u: User) =>
  `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim() || "—";

export const exportUsersCSV = (
  selected: Record<string, boolean>,
  users: User[]
) => {
  const selectedRows = users.filter((r) => selected[getUserId(r)]);
  const csvRows = [
    ["Name", "Email", "Phone", "Status", "Source"],
    ...selectedRows.map((r) => [
      `"${formatName(r)}"`,
      `"${r.email ?? ""}"`,
      `"${r.phoneNumber ?? ""}"`,
      `"${r.status ?? ""}"`,
      `"${r.howDidYouHearAboutUs ?? r.source ?? ""}"`,
    ]),
  ];

  const csvContent = csvRows.map((r) => r.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `export-selected-${Date.now()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
};

export const formatCurrency = (n: number) =>
  n.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  });

export const formatDates = (d: string) => {
  try {
    const dt = new Date(d);
    return dt.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return d;
  }
};
