"use client";

import React, { useMemo, useState, useCallback } from "react";
import { Users, MoreHorizontal, Download, Delete, Loader2 } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useUsers } from "@/hooks/useUsers";
import { User } from "@/types/auth";
import { getUserId, formatName, exportUsersCSV } from "@/lib/utils";
import StatusBadge from "./components/directory/StatusBadge";
import { useRouter } from "next/navigation";

// ---------- Component ----------
function Directory() {
  // UI state
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [page, setPage] = useState(1);
  const perPage = 10;

  const router = useRouter();

  // Fetch users via hook
  const {
    data: apiResponse,
    isLoading,
    isError,
  } = useUsers(
    statusFilter === "all" ? "" : statusFilter,
    sourceFilter === "all" ? "" : sourceFilter
  );

  const users: User[] = useMemo(() => {
    return Array.isArray(apiResponse) ? apiResponse : apiResponse?.data ?? [];
  }, [apiResponse]);

  // Client-side search filter
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => {
      const first = (u.firstName ?? "").toLowerCase();
      const last = (u.lastName ?? "").toLowerCase();
      const full = `${u.firstName ?? ""} ${u.lastName ?? ""}`.toLowerCase();
      const email = (u.email ?? "").toLowerCase();
      const phone = (u.phoneNumber ?? "").toLowerCase();
      return (
        first.includes(q) ||
        last.includes(q) ||
        full.includes(q) ||
        email.includes(q) ||
        phone.includes(q)
      );
    });
  }, [users, query]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const pageRows = useMemo(
    () => filtered.slice((page - 1) * perPage, page * perPage),
    [filtered, page, perPage]
  );

  const allSelected =
    pageRows.length > 0 && pageRows.every((r) => selected[getUserId(r)]);
  const selectedCount = Object.values(selected).filter(Boolean).length;

  // Handlers
  const toggleRow = useCallback((id: string) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleSelectAll = useCallback(() => {
    setSelected((prev) => {
      const next = { ...prev };
      if (allSelected) {
        pageRows.forEach((r) => {
          delete next[getUserId(r)];
        });
      } else {
        pageRows.forEach((r) => {
          next[getUserId(r)] = true;
        });
      }
      return next;
    });
  }, [allSelected, pageRows]);

  const handleExport = useCallback(() => {
    exportUsersCSV(selected, users);
  }, [selected, users]);

  const allSources = [
    "WhatsApp",
    "Twitter",
    "Instagram",
    "LinkedIn",
    "Facebook",
    "Google_Search",
    "Friend_Referral",
    "Event_Conference",
    "Blog_Article",
    "Other",
  ];

  return (
    <section className="p-6 md:p-8 bg-[#f9fafb] dark:bg-[#0b0b0b] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-[#E51919] p-3 text-white">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Directory</h1>
              <p className="text-sm text-gray-500">
                Search, filter & manage candidates
              </p>
            </div>
          </div>

          <Button onClick={handleExport}>
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </header>

        {/* Filters */}
        <Card>
          <CardContent className="flex flex-wrap items-center gap-4">
            <Input
              placeholder="Search name, email or phone"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              className="w-full md:w-64"
            />

            <Select
              onValueChange={(v) => {
                setStatusFilter(v);
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
              </SelectContent>
            </Select>

            <Select
              onValueChange={(v) => {
                setSourceFilter(v);
                setPage(1);
              }}
              defaultValue="all"
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="All sources" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All sources</SelectItem>
                {allSources.map((src) => (
                  <SelectItem key={src} value={src}>
                    {src}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Table */}
        <Card>
          <CardHeader className="flex justify-between">
            <CardTitle className="text-lg">Candidates ({total})</CardTitle>
            {selectedCount > 0 && (
              <p className="text-sm text-gray-500">{selectedCount} selected</p>
            )}
          </CardHeader>

          <CardContent>
            {isLoading ? (
              <div className="flex justify-center items-center py-10">
                <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
              </div>
            ) : isError ? (
              <p className="text-center text-red-500">
                Error loading candidates.
              </p>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Checkbox
                            checked={allSelected}
                            onCheckedChange={toggleSelectAll}
                          />
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {pageRows.length ? (
                        pageRows.map((row) => {
                          const id = getUserId(row);
                          return (
                            <TableRow
                              key={id}
                              onClick={() =>
                                router.push(`/admin/directory/${id}`)
                              }
                            >
                              <TableCell>
                                <Checkbox
                                  checked={!!selected[id]}
                                  onCheckedChange={() => toggleRow(id)}
                                />
                              </TableCell>

                              <TableCell>
                                <div className="font-medium capitalize">
                                  {formatName(row)}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {row.email ?? "—"}
                                </div>
                              </TableCell>

                              <TableCell>{row.phoneNumber ?? "—"}</TableCell>

                              <TableCell>
                                <StatusBadge status={row.status} />
                              </TableCell>

                              <TableCell>
                                {row.howDidYouHearAboutUs ?? row.source ?? "—"}
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
                                      onClick={() => alert(`Delete user ${id}`)}
                                    >
                                      <Delete className="w-4 h-4 mr-2" /> Delete
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          );
                        })
                      ) : (
                        <TableRow>
                          <TableCell
                            colSpan={6}
                            className="text-center py-8 text-gray-500"
                          >
                            No results found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>

                <Separator className="my-4" />

                {/* Pagination */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelected({})}
                    >
                      Clear
                    </Button>

                    {selectedCount > 0 && (
                      <Button size="sm" onClick={handleExport}>
                        Export Selected
                      </Button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={page <= 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                      Prev
                    </Button>

                    <span>
                      Page {page} of {pages}
                    </span>

                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={page >= pages}
                      onClick={() => setPage((p) => Math.min(pages, p + 1))}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

Directory.displayName = "Directory";
export default Directory;
