"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { recentApplicants } from "@/data/admin";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// Badge component
const StatusBadge = ({ text }: { text: string }) => {
  const colors: Record<string, string> = {
    Paid: "bg-green-100 text-green-800",
    "Not Paid": "bg-red-100 text-red-800",
    Completed: "bg-blue-100 text-blue-800",
    Yes: "bg-indigo-100 text-indigo-800",
    No: "bg-gray-100 text-gray-800",
    Pending: "bg-yellow-100 text-yellow-800",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${
        colors[text] || "bg-gray-100 text-gray-800"
      }`}
    >
      {text}
    </span>
  );
};

// Stats helper
const getStats = (apps: typeof recentApplicants) => ({
  total: apps.length,
  enrolled: apps.filter((a) => a.enrolled === "Yes").length,
  examPassed: apps.filter(
    (a) => a.assessment === "Completed" && a.enrolled === "Yes"
  ).length,
  examFailed: apps.filter(
    (a) => a.assessment === "Completed" && a.enrolled === "No"
  ).length,
  pendingPayment: apps.filter((a) => a.applicationFee === "Not Paid").length,
});

// Filter applicants by category
const filterByCategory = (
  apps: typeof recentApplicants,
  filter: string
): typeof recentApplicants => {
  switch (filter) {
    case "enrolled":
      return apps.filter((a) => a.enrolled === "Yes");
    case "examPassed":
      return apps.filter(
        (a) => a.assessment === "Completed" && a.enrolled === "Yes"
      );
    case "examFailed":
      return apps.filter(
        (a) => a.assessment === "Completed" && a.enrolled === "No"
      );
    case "pendingPayment":
      return apps.filter((a) => a.applicationFee === "Not Paid");
    case "all":
    default:
      return apps;
  }
};

const Reports = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterKey, setFilterKey] = useState<
    "all" | "enrolled" | "examPassed" | "examFailed" | "pendingPayment"
  >("all");

  const rowsPerPage = 10;
  const stats = getStats(recentApplicants);

  // Filter + search
  const filteredApplicants = useMemo(() => {
    let data = filterByCategory(recentApplicants, filterKey);
    if (search) {
      data = data.filter(
        (a) =>
          a.name.toLowerCase().includes(search.toLowerCase()) ||
          a.email.toLowerCase().includes(search.toLowerCase())
      );
    }
    return data;
  }, [search, filterKey]);

  // Pagination
  const paginatedApplicants = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return filteredApplicants.slice(start, start + rowsPerPage);
  }, [filteredApplicants, currentPage]);

  const totalPages = Math.ceil(filteredApplicants.length / rowsPerPage);

  const summaryCards = [
    {
      key: "all",
      label: "Total Applicants",
      value: stats.total,
      color: "text-black",
    },
    {
      key: "enrolled",
      label: "Enrolled",
      value: stats.enrolled,
      color: "text-indigo-600",
    },
    {
      key: "examPassed",
      label: "Exam Passed",
      value: stats.examPassed,
      color: "text-green-600",
    },
    {
      key: "examFailed",
      label: "Exam Failed",
      value: stats.examFailed,
      color: "text-red-600",
    },
    {
      key: "pendingPayment",
      label: "Pending Payment",
      value: stats.pendingPayment,
      color: "text-yellow-600",
    },
  ] as const;

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Applicants Reports</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {summaryCards.map((card) => (
          <Card
            key={card.key}
            onClick={() => {
              setFilterKey(card.key);
              setCurrentPage(1);
            }}
            className={`shadow-sm cursor-pointer transition-transform hover:scale-105 ${
              filterKey === card.key ? "border-2 border-blue-500" : "border"
            }`}
          >
            <CardContent className="p-4">
              <p className="text-sm text-gray-500">{card.label}</p>
              <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search + Table */}
      <Card className="shadow-lg rounded-xl border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4 border-b">
          <h2 className="text-lg font-semibold">
            {summaryCards.find((c) => c.key === filterKey)?.label ||
              "Applicants"}
          </h2>
          <Input
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="max-w-xs"
          />
        </div>

        <CardContent className="pt-4">
          {filteredApplicants.length > 0 ? (
            <>
              <Table className="min-w-[700px]">
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    {[
                      "Name",
                      "Email",
                      "Application Fee",
                      "Assessment",
                      "Enrolled",
                      "Applied On",
                    ].map((head) => (
                      <TableHead key={head}>{head}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedApplicants.map((app, idx) => (
                    <TableRow
                      key={idx}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-gray-50"
                          : "bg-gray-50 hover:bg-gray-100"
                      }
                    >
                      <TableCell>{app.name}</TableCell>
                      <TableCell>{app.email}</TableCell>
                      <TableCell>
                        <StatusBadge text={app.applicationFee} />
                      </TableCell>
                      <TableCell>
                        <StatusBadge text={app.assessment} />
                      </TableCell>
                      <TableCell>
                        <StatusBadge text={app.enrolled} />
                      </TableCell>
                      <TableCell>{app.appliedOn}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <Pagination className="mt-6">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    />
                  </PaginationItem>

                  {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  {totalPages > 5 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}

                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={() =>
                        setCurrentPage((p) => Math.min(p + 1, totalPages))
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <p className="text-lg">No applicants found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
