import ProtectedRoute from "@/components/authentication/ProtectedRoute";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <DashboardLayout role="student">{children}</DashboardLayout>
    </ProtectedRoute>
  );
}
