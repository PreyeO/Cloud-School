import ProtectedRoute from "@/components/authentication/ProtectedRoute";
import DashboardLayout from "@/components/layout/DashboardLayout";

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </ProtectedRoute>
  );
};
export default StudentLayout;
