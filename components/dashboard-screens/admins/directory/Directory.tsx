"use client";

import React, { useMemo, useState, useCallback } from "react";
import { Users, Download } from "lucide-react";
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
import { useRouter } from "next/navigation";
import { useUsers } from "@/hooks/useUsers";
import { User } from "@/types/auth";
import { getUserId, formatName, exportUsersCSV } from "@/lib/utils";
import StatusBadge from "./StatusBadge";
import { PaginatedTable } from "@/components/dashboard-screens/share-components/PaginatedTable";
import { TableCell, TableRow } from "@/components/ui/table";
import { RowActions } from "../../share-components/RowAction";
import { allSources } from "@/data/admin";
import Title from "@/components/ui/typography/title";
import Paragraph from "@/components/ui/typography/paragraph";
import LoadingState from "@/components/ui/loaders/loading-state";
import { useChangeStatus } from "@/hooks/useChangeStatus";

const PER_PAGE = 7;

const Directory = () => {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");
  const [allSelected, setAllSelected] = useState(false);
  const router = useRouter();
  const { mutate: updateStatus, isPending } = useChangeStatus();

  // Fetch users
  const {
    data: apiResponse,
    isLoading,
    isError,
  } = useUsers(
    statusFilter === "all" ? "" : statusFilter,
    sourceFilter === "all" ? "" : sourceFilter
  );

  const users: User[] = useMemo(
    () => (Array.isArray(apiResponse) ? apiResponse : apiResponse?.data ?? []),
    [apiResponse]
  );

  // Client-side search
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

  const handleSelectAll = useCallback(() => {
    setAllSelected((prev) => !prev);
  }, []);

  const handleExport = useCallback(
    () =>
      exportUsersCSV(
        allSelected
          ? Object.fromEntries(filtered.map((u) => [getUserId(u), true]))
          : {},
        users
      ),
    [allSelected, filtered, users]
  );

  if (isLoading) return <LoadingState />;
  if (isError)
    return (
      <p className="text-center text-[#E51919] py-10">
        Error loading students.
      </p>
    );

  return (
    <section className="min-h-screen md:px-10 pt-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row lg:justify-between md:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-[#E51919] p-3 text-white">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <Title>Directory</Title>
              <Paragraph>Search, filter & manage candidates</Paragraph>
            </div>
          </div>
          <Button onClick={handleExport} size="sm">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
        </div>

        {/* Filters */}
        <Card className="">
          <CardContent className="flex flex-wrap gap-4 items-center">
            <Input
              placeholder="Search name, email or phone"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 max-w-[180px]"
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
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={allSelected}
                onCheckedChange={handleSelectAll}
              />
              <CardTitle className="text-lg">
                Select All ({filtered.length}) Students
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            {filtered.length === 0 ? (
              <p className="text-center text-gray-500 py-6">
                No candidates found.
              </p>
            ) : (
              <PaginatedTable
                data={filtered}
                columns={["Name", "Phone", "Status", "Source", "Actions"]}
                perPage={PER_PAGE}
                renderRow={(row) => {
                  const id = getUserId(row);
                  return (
                    <TableRow
                      key={id}
                      onClick={() => router.push(`/admin/directory/${id}`)}
                      className="cursor-pointer"
                    >
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
                      <TableCell>
                        <RowActions
                          userId={id}
                          isPending={isPending}
                          onChangeStatus={(newStatus) =>
                            updateStatus({ id, status: newStatus })
                          }
                        />
                      </TableCell>
                    </TableRow>
                  );
                }}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Directory;
