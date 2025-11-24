"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import CreateAdminForm from "@/components/authentication/forms/CreateAdminForm";
import { useAdmins } from "@/hooks/useAdmins";
import { formatDate } from "@/lib/utils";
import { User } from "@/types/auth";
import { PaginatedTable } from "@/components/dashboard-screens/share-components/PaginatedTable";
import { TableCell, TableRow } from "@/components/ui/table";
import { RowActions } from "../share-components/RowAction";
import LoadingState from "@/components/ui/loaders/loading-state";

export default function SuperAdminSettings() {
  const { data, isLoading, isError } = useAdmins();

  if (isLoading) return <LoadingState />;

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Failed to load admins. Please refresh.
      </div>
    );
  }

  const admins: User[] = data?.data?.admins ?? [];

  return (
    <section className="min-h-screen px-3 sm:px-6 md:px-10 pt-8 space-y-8">
      {/* Create Admin */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Create New Admin</CardTitle>
        </CardHeader>
        <CardContent className="py-4">
          <CreateAdminForm />
        </CardContent>
      </Card>

      {/* Existing Admins Table */}
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">
            Existing Admins ({admins.length})
          </CardTitle>
        </CardHeader>

        <CardContent className="py-4">
          {/* Mobile Scroll Wrapper */}
          <div className="w-full overflow-x-auto rounded-md border">
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
                <TableRow key={admin._id || index} className="text-sm">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {admin.firstName} {admin.lastName ?? ""}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {admin.email}
                  </TableCell>
                  <TableCell>{admin.role}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    {formatDate(admin.createdAt)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {formatDate(admin.lastLogin)}
                  </TableCell>
                  <TableCell>
                    <Switch checked={admin.status === "active"} />
                  </TableCell>
                  <TableCell>
                    <RowActions
                      onRemove={() => alert(`Remove admin ${admin.email}`)}
                    />
                  </TableCell>
                </TableRow>
              )}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
