// src/components/admin/Directory.tsx
"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Search as SearchIcon,
  MoreHorizontal,
  Edit,
  Eye,
  Download,
  CheckCircle2,
  XCircle,
  Delete,
} from "lucide-react";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
// import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Pagination } from "@/components/ui/pagination"; // optional, adapt if you don't have it
import { Checkbox } from "@/components/ui/checkbox";

// ---------- Mock Data ----------
type Candidate = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  source?: string;
  status: "Applied" | "Enrolled" | "Admitted" | "Withdrawn";
  score?: number; // entrance exam score
  appliedAt: string;
  avatarUrl?: string;
};

const MOCK: Candidate[] = [
  {
    id: "c_01",
    firstName: "Sandra",
    lastName: "Okechukwu",
    email: "sandra@example.com",
    phone: "0801****",
    source: "Whatsapp",
    status: "Admitted",
    score: 89,
    appliedAt: "2025-08-21",
    avatarUrl: "",
  },
  {
    id: "c_02",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "0803****",
    source: "Referral",
    status: "Applied",
    score: 62,
    appliedAt: "2025-09-04",
    avatarUrl: "",
  },
  {
    id: "c_03",
    firstName: "Grace",
    lastName: "Akpan",
    email: "grace@example.com",
    phone: "0802****",
    source: "Facebook",
    status: "Enrolled",
    score: 76,
    appliedAt: "2025-07-15",
    avatarUrl: "",
  },
  {
    id: "c_04",
    firstName: "Chinedu",
    lastName: "Ibe",
    email: "chi@example.com",
    phone: "0816****",
    source: "Linkedin",
    status: "Withdrawn",
    score: 45,
    appliedAt: "2025-06-03",
    avatarUrl: "",
  },
  // ...more rows
];

// ---------- Helpers ----------
const formatName = (c: Candidate) => `${c.firstName} ${c.lastName}`;
const statusColor = (s: Candidate["status"]) =>
  s === "Admitted"
    ? "bg-green-50 text-green-700"
    : s === "Enrolled"
    ? "bg-blue-50 text-blue-700"
    : s === "Applied"
    ? "bg-yellow-50 text-yellow-800"
    : "bg-red-50 text-red-700";

// ---------- Directory Component ----------
export default function Directory() {
  // Data & UI state
  const [rows] = useState<Candidate[]>(MOCK);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [page, setPage] = useState(1);
  const perPage = 10;

  // Derived
  const sources = useMemo(
    () => Array.from(new Set(rows.map((r) => r.source || "Unknown"))),
    [rows]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (statusFilter !== "all" && r.status !== statusFilter) return false;
      if (sourceFilter !== "all" && (r.source || "Unknown") !== sourceFilter)
        return false;
      if (!q) return true;
      return (
        r.firstName.toLowerCase().includes(q) ||
        r.lastName.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        (r.phone || "").toLowerCase().includes(q)
      );
    });
  }, [rows, query, statusFilter, sourceFilter]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const pageRows = filtered.slice((page - 1) * perPage, page * perPage);

  const allSelectedOnPage = pageRows.every((r) => selected[r.id]);
  const someSelected = Object.values(selected).some(Boolean);

  // Actions
  function toggleRow(id: string) {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function toggleSelectAllOnPage() {
    const next = { ...selected };
    if (allSelectedOnPage) {
      pageRows.forEach((r) => delete next[r.id]);
    } else {
      pageRows.forEach((r) => (next[r.id] = true));
    }
    setSelected(next);
  }

  function clearSelection() {
    setSelected({});
  }

  function exportSelectedCSV() {
    const selectedRows = rows.filter((r) => selected[r.id]);
    // Placeholder: generate CSV from selectedRows. For now show console message.
    console.log("Exporting CSV for:", selectedRows);
    // In real app, call API / generate blob and trigger download.
  }

  function viewProfile(candidate: Candidate) {
    // Placeholder: open drawer/modal with candidate details
    alert(`Open profile for ${formatName(candidate)} — (implement drawer)`);
  }

  // Small UI pieces
  const StatusBadge = ({ status }: { status: Candidate["status"] }) => (
    <span
      className={`inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs font-medium ${statusColor(
        status
      )}`}
    >
      {status === "Admitted" && (
        <CheckCircle2 className="w-3 h-3 text-green-600" />
      )}
      {status === "Withdrawn" && <XCircle className="w-3 h-3 text-red-600" />}
      <span>{status}</span>
    </span>
  );

  // ---------- Render ----------
  return (
    <section className="p-6 md:p-8 lg:p-10 bg-[#f9fafb] dark:bg-[#0b0b0b] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-[#E51919] p-3 text-white">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Directory
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                All candidates & students — search, filter, and manage.
              </p>
            </div>
          </div>

          <Button onClick={() => exportSelectedCSV()}>
            <Download className="w-6 h-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Filters / Search */}
        <Card>
          <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-1/2">
              <Input
                placeholder="Search name, email or phone"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                className="flex-1"
                // leftIcon={<SearchIcon className="w-4 h-4 text-gray-400" />}
              />
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Select
                onValueChange={(val) => {
                  setStatusFilter(val);
                  setPage(1);
                }}
                defaultValue="all"
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="Applied">Applied</SelectItem>
                  <SelectItem value="Enrolled">Enrolled</SelectItem>
                  <SelectItem value="Admitted">Admitted</SelectItem>
                  <SelectItem value="Withdrawn">Withdrawn</SelectItem>
                </SelectContent>
              </Select>

              <Select
                onValueChange={(val) => {
                  setSourceFilter(val);
                  setPage(1);
                }}
                defaultValue="all"
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All sources" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All sources</SelectItem>
                  {sources.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Table Card */}
        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">Candidates</CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {total} total — page {page} of {pages}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {someSelected && (
                <div className="text-sm text-gray-600 dark:text-gray-300 mr-2">
                  {Object.values(selected).filter(Boolean).length} selected
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={allSelectedOnPage}
                        onCheckedChange={() => toggleSelectAllOnPage()}
                        aria-label="Select all rows on page"
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Number</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Source</TableHead>

                    <TableHead>Applied</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {pageRows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Checkbox
                          checked={!!selected[row.id]}
                          onCheckedChange={() => toggleRow(row.id)}
                        />
                      </TableCell>

                      <TableCell>
                        <div>
                          <div className="font-medium text-sm text-gray-900 dark:text-white">
                            {formatName(row)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {row.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-700 dark:text-gray-200">
                          {row.phone ?? "—"}
                        </div>
                      </TableCell>

                      <TableCell>
                        <StatusBadge status={row.status} />
                      </TableCell>

                      <TableCell>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {row.source}
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {row.appliedAt}
                        </div>
                      </TableCell>

                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent side="left">
                            <DropdownMenuItem
                              onClick={() => alert("Edit — implement form")}
                            >
                              <Delete className="w-4 h-4 mr-2" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}

                  {pageRows.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={7}
                        className="text-center py-8 text-sm text-gray-500"
                      >
                        No candidates found. Try different filters or search.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <Separator className="my-4" />

            {/* Footer: Bulk actions + pagination */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    for (const r of pageRows)
                      setSelected((prev) => ({ ...prev, [r.id]: true }));
                  }}
                >
                  Select page
                </Button>
                <Button variant="ghost" size="sm" onClick={clearSelection}>
                  Clear
                </Button>

                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 ml-4">
                  <span>Bulk actions:</span>
                  <Button
                    size="sm"
                    onClick={() => exportSelectedCSV()}
                    disabled={!someSelected}
                  >
                    Export CSV
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => alert("Mark as contacted (implement)")}
                    disabled={!someSelected}
                  >
                    Mark Contacted
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* simple pagination controls */}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Page
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    disabled={page <= 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                  >
                    Prev
                  </Button>
                  <div className="text-sm">
                    {page} / {pages}
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    disabled={page >= pages}
                    onClick={() => setPage((p) => Math.min(pages, p + 1))}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
