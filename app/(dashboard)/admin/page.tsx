"use client";
import dynamic from "next/dynamic";
const AdminDashboard = dynamic(
  () => import("@/components/dashboard-screens/admins/overview/AdminOverview"),
  { ssr: false }
);
export default function AdminOverviewPage() {
  return <AdminDashboard />;
}
