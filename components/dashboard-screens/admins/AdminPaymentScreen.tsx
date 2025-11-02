"use client";

import { CreditCard, Wallet, Users, CheckCircle2 } from "lucide-react";
import { StatCard } from "./components/payments/StatCard";
import { TrendCard } from "./components/payments/TrendCard";
import { PaymentTable } from "./components/payments/PaymentTable";
import { useGetAllPayments } from "@/hooks/useGetAllPayment";
import { useMemo } from "react";

export default function AdminPaymentScreen() {
  const { data, isLoading, isError } = useGetAllPayments();

  // Memoize payment stats
  const paymentStats = useMemo(() => data?.data || {}, [data?.data]);

  const totalSubs = paymentStats.totalSubscriptions || 0;
  const pending = paymentStats.pendingPayments || 0;
  const successRate =
    totalSubs > 0 ? (((totalSubs - pending) / totalSubs) * 100).toFixed(1) : 0;

  const stats = [
    {
      label: "Total Application Payments",
      value: isLoading
        ? "Loading..."
        : `₦${paymentStats.applicationFeeRevenue?.toLocaleString() || 0}`,
      icon: CreditCard,
      trend: `${paymentStats.applicationFeePaidUsers || 0} total applied`,
    },
    {
      label: "Total School Fees Payments",
      value: isLoading
        ? "Loading..."
        : `₦${paymentStats.subscriptionRevenue?.toLocaleString() || 0}`,
      icon: Wallet,
      trend: `${paymentStats.totalSubscriptions || 0} total admitted`,
    },
    {
      label: "Total Users",
      value: isLoading ? "Loading..." : paymentStats.totalUsers || 0,
      icon: Users,
      trend: `${paymentStats.totalUsers || 0} total signed up`,
    },
    {
      label: "Successful Transactions",
      value: isLoading ? "Loading..." : `${successRate}%`,
      icon: CheckCircle2,
      trend: "Stable",
    },
  ];

  // Build chart data dynamically (currently 12 months)
  const chartData = useMemo(() => {
    if (!paymentStats) return [];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return months.map((month) => ({
      month,
      totalUsers: paymentStats.totalUsers || 0,
      applicationFee: paymentStats.applicationFeePaidUsers || 0,
      subscriptions: paymentStats.totalSubscriptions || 0,
    }));
  }, [paymentStats]);

  const payments = [
    {
      id: "1",
      student: "John Doe",
      plan: "Early Bird",
      type: "Application Fee",
      amount: "₦50,000",
      status: "Successful",
      date: "Oct 12, 2025",
    },
    {
      id: "2",
      student: "Sarah Ibrahim",
      plan: "Regular",
      type: "School Fees",
      amount: "₦250,000",
      status: "Successful",
      date: "Oct 11, 2025",
    },
  ];

  if (isError) {
    return (
      <section className="p-10">
        <p className="text-red-600 font-semibold">
          Unable to load payment statistics.
        </p>
      </section>
    );
  }

  return (
    <section className="p-6 md:p-10 bg-[#f9fafb] dark:bg-[#0B0B0B] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Payment Overview
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Monitor all transactions, fees, signups, and admissions at a glance.
          </p>
        </header>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* TREND CHART */}
        <TrendCard data={chartData} />

        {/* RECENT PAYMENTS TABLE */}
        <PaymentTable payments={payments} />
      </div>
    </section>
  );
}
