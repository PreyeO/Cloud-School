import AdminDashboard from "@/components/dashboard-screens/admins/AdminOverview";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function AdminOverviewPage() {
  return (
    <DashboardLayout role="admin">
      <AdminDashboard />
    </DashboardLayout>
  );
}
