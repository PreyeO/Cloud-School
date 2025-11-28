"use client";
import React, { useMemo } from "react";
import { Users, CreditCard, Wallet } from "lucide-react";
import { StatCard } from "./StatCard";
import { FunnelCard } from "./FunnelCard";
import { useGetAllUsers } from "@/hooks/useGetAllUsers";
import { useGetAllPayments } from "@/hooks/useGetAllPayment";
import { useGetAllMarketingFunnel } from "@/hooks/useGetAllMarketingFunnels";
import { useGetAllAdmissionFunnel } from "@/hooks/useGetAllAdmissionFunnel";
import { MarketingFunnelItem } from "@/types/admin";
import LoadingState from "@/components/ui/loaders/loading-state";
import { TrendCard } from "../payments/TrendCard";

const AdminOverview = () => {
  // ✅ Hooks
  const { data: users = [], isLoading: usersLoading } = useGetAllUsers();
  const { data: paymentsData } = useGetAllPayments();
  const { data: marketingFunnelData } = useGetAllMarketingFunnel();
  const { data: admissionFunnelData } = useGetAllAdmissionFunnel();
  const { data: funnel } = useGetAllAdmissionFunnel();

  // Loading flag
  const isPageLoading =
    usersLoading ||
    !paymentsData ||
    !marketingFunnelData ||
    !admissionFunnelData;

  // ✅ All hooks always called
  const paymentStats = useMemo(
    () => paymentsData?.data || {},
    [paymentsData?.data]
  );

  const MAX_BAR = 100;

  const admissionFunnel = useMemo(() => {
    const funnelData = admissionFunnelData?.data || {};
    const stages = [
      { stage: "Applied", count: funnelData.applied || 0 },
      { stage: "Enrolled", count: funnelData.enrolled || 0 },
      { stage: "Admitted", count: funnelData.admitted || 0 },
    ];

    const calcPct = (count: number) =>
      Math.min(Math.round((count / MAX_BAR) * 100), 100);

    return stages.map((s) => ({ ...s, pct: calcPct(s.count) }));
  }, [admissionFunnelData]);

  const stats = useMemo(() => {
    const totalUsers = users.length;
    const totalApplicationPaid = paymentStats.applicationFeeRevenue || 0;
    const totalSchoolFeesPaid = paymentStats.subscriptionRevenue || 0;

    return [
      {
        id: "students",
        label: "Total Users",
        value: totalUsers,
        sub: "Updated just now",
        Icon: Users,
      },
      {
        id: "applicationFees",
        label: "Total Application Paid",
        value: `₦${totalApplicationPaid.toLocaleString()}`,
        sub: "This term",
        Icon: CreditCard,
      },
      {
        id: "schoolFees",
        label: "Total School Fees Paid",
        value: `₦${totalSchoolFeesPaid.toLocaleString()}`,
        sub: "This term",
        Icon: Wallet,
      },
    ];
  }, [users, paymentStats]);

  const marketingFunnel = useMemo(() => {
    if (!marketingFunnelData?.data) return [];
    const data: MarketingFunnelItem[] = marketingFunnelData.data;
    return data.map((item) => ({
      stage: item.label,
      count: item.count,
      pct: Math.min(Math.round((item.count / MAX_BAR) * 100), 100),
    }));
  }, [marketingFunnelData]);

  return (
    <section className="min-h-screen md:px-10 pt-10">
      {isPageLoading ? (
        <LoadingState />
      ) : (
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 flex flex-col h-full">
              <TrendCard funnel={funnel?.data} className="w-full flex-1" />
            </div>

            {/* RIGHT SIDE */}
            <aside className="space-y-6 flex flex-col">
              <FunnelCard title="Admission Funnel" data={admissionFunnel} />
              <FunnelCard title="Marketing Funnel" data={marketingFunnel} />
            </aside>
          </div>
        </div>
      )}
    </section>
  );
};
export default AdminOverview;
