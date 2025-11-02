"use client";

import React, { useMemo } from "react";
import { Users, CreditCard, BookOpen, Wallet } from "lucide-react";
import { StatCard } from "./components/overview/StatCard";
import { LineChartCard } from "./components/overview/LineChartCard";
import { FunnelCard } from "./components/overview/FunnelCard";
import { RecentActivityCard } from "./components/overview/RecentActivity";
import { useGetAllUsers } from "@/hooks/useGetAllUsers";
import { useGetAllPayments } from "@/hooks/useGetAllPayment";
import { useGetAllMarketingFunnel } from "@/hooks/useGetAllMarketingFunnels";
import { MarketingFunnelItem } from "@/types/admin";

export default function AdminOverview() {
  const { data: users = [], isLoading: usersLoading } = useGetAllUsers();
  const { data: paymentsData, isLoading: paymentsLoading } =
    useGetAllPayments();
  const { data: marketingFunnelData, isLoading: funnelLoading } =
    useGetAllMarketingFunnel();

  // Extract payment stats safely
  const paymentStats = useMemo(
    () => paymentsData?.data || {},
    [paymentsData?.data]
  );

  // Admission Funnel
  const MAX_BAR = 100; // 100 users = full bar visually

  const admissionFunnel = useMemo(() => {
    const totalUsers = paymentStats.totalUsers || 0;
    const applied = paymentStats.applicationFeePaidUsers || 0;
    const enrolled = paymentStats.totalSubscriptions || 0;
    const admitted = paymentStats.totalSubscriptions || 0;

    const calcPct = (count: number) =>
      Math.min(Math.round((count / MAX_BAR) * 100), 100);

    return [
      { stage: "Signed Up", count: totalUsers, pct: calcPct(totalUsers) },
      { stage: "Applied", count: applied, pct: calcPct(applied) },
      { stage: "Enrolled", count: enrolled, pct: calcPct(enrolled) },
      { stage: "Admitted", count: admitted, pct: calcPct(admitted) },
    ];
  }, [paymentStats]);

  // Stats Cards
  const stats = useMemo(() => {
    const totalUsers = users.length;
    const totalApplicationPaid = paymentStats.applicationFeeRevenue || 0;
    const totalSchoolFeesPaid = paymentStats.subscriptionRevenue || 0;

    return [
      {
        id: "students",
        label: "Total Users",
        value: usersLoading ? "..." : totalUsers,
        sub: usersLoading ? "" : "Updated just now",
        Icon: Users,
      },
      {
        id: "applicationFees",
        label: "Total Application Paid",
        value: paymentsLoading
          ? "..."
          : `₦${totalApplicationPaid.toLocaleString()}`,
        sub: "this term",
        Icon: CreditCard,
      },
      {
        id: "schoolFees",
        label: "Total School Fees Paid",
        value: paymentsLoading
          ? "..."
          : `₦${totalSchoolFeesPaid.toLocaleString()}`,
        sub: "this term",
        Icon: Wallet,
      },
      {
        id: "assessment",
        label: "Total Entry Assessment Completed",
        value: 86,
        Icon: BookOpen,
      },
    ];
  }, [users, paymentStats, usersLoading, paymentsLoading]);

  // Completion Data for Line Chart
  const completionData = [
    { week: "W1", completed: 12 },
    { week: "W2", completed: 22 },
    { week: "W3", completed: 35 },
    { week: "W4", completed: 48 },
    { week: "W5", completed: 60 },
    { week: "W6", completed: 75 },
  ];

  const marketingFunnel = useMemo(() => {
    if (!marketingFunnelData?.data) return [];

    const data: MarketingFunnelItem[] = marketingFunnelData.data;

    return data.map((item: MarketingFunnelItem) => ({
      stage: item.label,
      count: item.count, // show the real number
      pct: Math.min(Math.round((item.count / MAX_BAR) * 100), 100), // max bar 100%
    }));
  }, [marketingFunnelData]);

  // Recent Activities
  const recentActivities = [
    { id: 1, text: "Sandra completed Module 2 Assessment.", time: "12m" },
    { id: 2, text: "New application from John Doe.", time: "35m" },
    { id: 3, text: "Payment received: ₦150,000 (Early Bird).", time: "2h" },
    { id: 4, text: "Course 'DevOps' created by Admin.", time: "1d" },
  ];

  return (
    <section className="p-6 md:p-10 bg-[#f9fafb] dark:bg-[#0b0b0b] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE: Chart + Activities */}
          <div className="lg:col-span-2 space-y-6">
            <LineChartCard data={completionData} />
            <RecentActivityCard activities={recentActivities} />
          </div>

          {/* RIGHT SIDE: Funnels */}
          <aside className="space-y-6 flex flex-col">
            <FunnelCard title="Admission Funnel" data={admissionFunnel} />
            <FunnelCard
              title="Marketing Funnel"
              data={funnelLoading ? [] : marketingFunnel}
            />
          </aside>
        </div>
      </div>
    </section>
  );
}
