"use client";
import dynamic from "next/dynamic";
const AdminPaymentScreen = dynamic(
  () =>
    import("@/components/dashboard-screens/admins/payments/AdminPaymentScreen"),
  { ssr: false }
);

const AdminPaymentPage = () => {
  return <AdminPaymentScreen />;
};
export default AdminPaymentPage;
