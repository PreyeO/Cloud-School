import Directory from "@/components/dashboard-screens/admins/Directory";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function ApplicantsPage() {
  return (
    <DashboardLayout role="admin">
      <Directory />
    </DashboardLayout>
  );
}
