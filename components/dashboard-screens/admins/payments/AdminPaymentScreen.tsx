"use client";

import { CreditCard, Wallet, Users, CheckCircle2 } from "lucide-react";
import { StatCard } from "./StatCard";
import { TrendCard } from "./TrendCard";
import { PaymentTable } from "./PaymentTable";
import { useGetAllPayments } from "@/hooks/useGetAllPayment";
import { useMemo } from "react";
import { months, payments } from "@/data/admin";
import Paragraph from "@/components/ui/typography/paragraph";
import Title from "@/components/ui/typography/title";

const AdminPaymentScreen = () => {
  const { data, isLoading, isError } = useGetAllPayments();

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

  const chartData = useMemo(() => {
    if (!paymentStats) return [];
    return months.map((month) => ({
      month,
      totalUsers: paymentStats.totalUsers || 0,
      applicationFee: paymentStats.applicationFeePaidUsers || 0,
      subscriptions: paymentStats.totalSubscriptions || 0,
    }));
  }, [paymentStats]);

  if (isError)
    return (
      <section className="p-6">
        <p className="text-red-600 font-semibold">
          Unable to load payment statistics.
        </p>
      </section>
    );

  return (
    <section className="min-h-screen  md:px-10 pt-10">
      <div className="max-w-7xl mx-3xl mx-auto space-y-10">
        <header>
          <Title>Payment Overview</Title>
          <Paragraph className="mt-1 text-gray-600 dark:text-gray-400">
            Monitor all transactions, fees, signups, and admissions at a glance.
          </Paragraph>
        </header>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>

        {/* TREND CHART */}
        <div className="overflow-x-auto w-full">
          <TrendCard data={chartData} />
        </div>

        {/* RECENT PAYMENTS TABLE */}
        <div className="overflow-x-auto w-full">
          <PaymentTable payments={payments} />
        </div>
      </div>
    </section>
  );
};

export default AdminPaymentScreen;
