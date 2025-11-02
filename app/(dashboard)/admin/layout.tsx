import ProtectedRoute from "@/components/authentication/ProtectedRoute";
import AdminDashboardLayout from "@/components/layout/AdminDashboardLayout";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <AdminDashboardLayout>{children}</AdminDashboardLayout>
    </ProtectedRoute>
  );
}
