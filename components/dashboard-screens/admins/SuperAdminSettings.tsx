"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Loader2 } from "lucide-react";
import CreateAdminForm from "@/components/authentication/forms/CreateAdminForm";
import { useAdmins } from "@/hooks/useAdmins";
import { formatDate } from "@/lib/utils";

export default function SuperAdminSettings() {
  // ✅ Fetch admins from backend
  const { data, isLoading, isError } = useAdmins();

  // ✅ Handle loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="animate-spin mr-2" /> Loading admins...
      </div>
    );
  }

  // ✅ Handle error
  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to load admins. Please refresh.
      </div>
    );
  }

  // ✅ Extract admins correctly (no `.data` issue)
  const admins = data?.data?.admins ?? [];

  return (
    <div className="space-y-6">
      {/* ✅ Create Admin Section */}
      <Card>
        <CardHeader>
          <CardTitle>Create New Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateAdminForm />
        </CardContent>
      </Card>

      {/* ✅ Existing Admins Table */}
      <Card>
        <CardHeader>
          <CardTitle>Existing Admins</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Email Verified</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Active</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {admins.length > 0 ? (
                admins.map((admin: any, index: number) => (
                  <TableRow key={admin._id || index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {admin.firstName} {admin.lastName ?? ""}
                    </TableCell>
                    <TableCell>{admin.email}</TableCell>
                    <TableCell>{admin.role}</TableCell>
                    <TableCell>{admin.status}</TableCell>
                    <TableCell>
                      {admin.isEmailVerified ? "Yes" : "No"}
                    </TableCell>
                    <TableCell>{formatDate(admin.createdAt)}</TableCell>
                    <TableCell>
                      <Switch checked={admin.status === "active"} />
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost">⋮</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem className="text-red-600">
                            Remove
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={9} className="text-center">
                    No admins found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
