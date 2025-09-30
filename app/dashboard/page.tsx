import ProgramOverview from "@/components/dashboard-screens/students/programOverview";
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function OverviewPage() {
  return (
    <DashboardLayout role="student">
      <ProgramOverview />
    </DashboardLayout>
  );
}
