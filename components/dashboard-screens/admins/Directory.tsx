"use client";

import React, { useMemo, useState, useCallback } from "react";
import { Users, Download, Loader2 } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";

import { useUsers } from "@/hooks/useUsers";
import { User } from "@/types/auth";
import { getUserId, formatName, exportUsersCSV } from "@/lib/utils";
import StatusBadge from "./components/directory/StatusBadge";
import { useRouter } from "next/navigation";
import { PaginatedTable } from "@/components/dashboard-screens/share-components/PaginatedTable";
import { TableCell, TableRow } from "@/components/ui/table";
import { RowActions } from "../share-components/RowAction";

function Directory() {
  // UI state
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const perPage = 7;

  const router = useRouter();

  // Fetch users
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

  const allSelected =
    filtered.length > 0 && filtered.every((r) => selected[getUserId(r)]);
  const selectedCount = Object.values(selected).filter(Boolean).length;

  // Handlers
  const toggleRow = useCallback((id: string) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const toggleSelectAll = useCallback(() => {
    setSelected((prev) => {
      const next = { ...prev };
      if (allSelected) {
        filtered.forEach((r) => delete next[getUserId(r)]);
      } else {
        filtered.forEach((r) => (next[getUserId(r)] = true));
      }
      return next;
    });
  }, [allSelected, filtered]);

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
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-64"
            />

            <Select
              onValueChange={(v) => setStatusFilter(v)}
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
              onValueChange={(v) => setSourceFilter(v)}
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
            <CardTitle className="text-lg">
              Candidates ({filtered.length})
            </CardTitle>
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
                <div className="mb-4 flex items-end gap-2">
                  {selectedCount > 0 && (
                    <Button size="sm" onClick={handleExport}>
                      Export Selected
                    </Button>
                  )}
                </div>

                <PaginatedTable
                  data={filtered}
                  columns={[
                    "Select",
                    "Name",
                    "Phone",
                    "Status",
                    "Source",
                    "Actions",
                  ]}
                  perPage={perPage}
                  renderRow={(row) => {
                    const id = getUserId(row);
                    return (
                      <TableRow
                        key={id}
                        onClick={() => router.push(`/admin/directory/${id}`)}
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
                        <TableCell className="">
                          <RowActions
                            onRemove={() => alert(`Remove admin ${row.email}`)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  }}
                />
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
