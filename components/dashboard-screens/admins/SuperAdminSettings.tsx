"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";
import CreateAdminForm from "@/components/authentication/forms/CreateAdminForm";
import { useAdmins } from "@/hooks/useAdmins";
import { formatDate } from "@/lib/utils";
import { User } from "@/types/auth";
import { PaginatedTable } from "@/components/dashboard-screens/share-components/PaginatedTable"; // your reusable component
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";

interface RowActionsProps {
  onRemove: () => void;
}

function RowActions({ onRemove }: RowActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          ⋮
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="text-red-600" onClick={onRemove}>
          Remove
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function SuperAdminSettings() {
  const { data, isLoading, isError } = useAdmins();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="animate-spin mr-2" /> Loading admins...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to load admins. Please refresh.
      </div>
    );
  }

  const admins: User[] = data?.data?.admins ?? [];

  return (
    <div className="space-y-6">
      {/* Create Admin Section */}
      <Card>
        <CardHeader>
          <CardTitle>Create New Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateAdminForm />
        </CardContent>
      </Card>

      {/* Existing Admins Table */}
      <Card>
        <CardHeader>
          <CardTitle>Existing Admins ({admins.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <PaginatedTable
            data={admins}
            perPage={7}
            columns={[
              "ID",
              "Full Name",
              "Email",
              "Role",
              "Created At",
              "Last Login",
              "Active",
              "Actions",
            ]}
            renderRow={(admin, index) => (
              <TableRow key={admin._id || index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {admin.firstName} {admin.lastName ?? ""}
                </TableCell>
                <TableCell>{admin.email}</TableCell>
                <TableCell>{admin.role}</TableCell>
                <TableCell>{formatDate(admin.createdAt)}</TableCell>
                <TableCell>{formatDate(admin.lastLogin)}</TableCell>
                <TableCell>
                  <Switch checked={admin.status === "active"} />
                </TableCell>
                <TableCell className="">
                  <RowActions
                    onRemove={() => alert(`Remove admin ${admin.email}`)}
                  />
                </TableCell>
              </TableRow>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}
