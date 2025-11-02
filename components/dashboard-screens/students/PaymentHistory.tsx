"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CreditCard, CheckCircle2, XCircle, Clock } from "lucide-react";
import { useTransactions } from "@/hooks/useTransactions";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Transaction {
  _id: string;
  amount: number;
  currency: string;
  status: string;
  createdAt: string;
  metadata?: {
    paymentType?: string;
    paymentMethod?: string;
  };
}

export default function PaymentHistory() {
  const { data, isLoading, isError } = useTransactions();
  const [activeTab, setActiveTab] = useState<"all" | "success" | "failed">(
    "all"
  );

  const payments: Transaction[] = data?.data || [];

  const successfulPayments = payments.filter(
    (p) => p.status?.toLowerCase() === "success" || p.status === "Successful"
  );

  const failedPayments = payments.filter(
    (p) =>
      p.status?.toLowerCase() === "failed" ||
      p.status?.toLowerCase() === "abandoned"
  );

  const totalPaid = successfulPayments.reduce(
    (sum, p) => sum + Number(p.amount || 0),
    0
  );

  const formatCurrency = (n: number) =>
    n.toLocaleString("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    });

  const formatDate = (d: string) => {
    try {
      const dt = new Date(d);
      return dt.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return d;
    }
  };

  const renderStatus = (status: string) => {
    const s = status?.toLowerCase();
    if (s === "success" || s === "successful")
      return (
        <span className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-green-600 dark:text-green-300">
          <CheckCircle2 className="w-4 h-4" /> Successful
        </span>
      );
    if (s === "failed")
      return (
        <span className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-red-600 dark:text-red-400">
          <XCircle className="w-4 h-4" /> Failed
        </span>
      );
    return (
      <span className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-yellow-600 dark:text-yellow-400">
        <Clock className="w-4 h-4" /> Pending
      </span>
    );
  };

  const filteredPayments =
    activeTab === "success"
      ? successfulPayments
      : activeTab === "failed"
      ? failedPayments
      : payments;

  if (isLoading)
    return (
      <section className="min-h-screen p-4 sm:p-8 bg-gray-50 dark:bg-[#0b0b0b]">
        <div className="max-w-6xl mx-auto space-y-4">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-20 w-full rounded-xl" />
          <Skeleton className="h-20 w-full rounded-xl" />
        </div>
      </section>
    );

  if (isError)
    return (
      <section className="min-h-screen p-8 flex items-center justify-center text-gray-500 dark:text-gray-400">
        Failed to load transactions. Please try again.
      </section>
    );

  return (
    <section className="min-h-screen p-4 sm:p-8 bg-gray-50 dark:bg-[#0b0b0b] transition-colors">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
              Payment History
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 max-w-xl">
              Review all your transactions in one place.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <div className="rounded-2xl bg-white dark:bg-[#121212] border border-gray-100 dark:border-[#222] shadow-sm px-4 py-3 flex items-center gap-4">
              <div className="flex items-center justify-center rounded-md w-12 h-12 bg-green-50 dark:bg-green-900/30">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Total paid
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {formatCurrency(totalPaid)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <main className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Transactions */}
        <section className="lg:col-span-2 space-y-4">
          {/* Tabs */}
          <div className="flex items-center justify-between">
            <Tabs
              value={activeTab}
              onValueChange={(value) =>
                setActiveTab(value as "all" | "success" | "failed")
              }
            >
              <TabsList className="relative flex items-center justify-between bg-white dark:bg-[#111] border border-gray-200 dark:border-[#222] rounded-full p-1 shadow-sm">
                {(["all", "success", "failed"] as const).map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="relative flex-1 text-sm font-medium px-5 py-2 rounded-full transition-all data-[state=active]:text-white data-[state=active]:font-semibold"
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full bg-[#E61A1A] text-white"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      />
                    )}
                    <span className="relative z-10 capitalize">
                      {tab === "success" ? "Successful" : tab}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {filteredPayments.length} items
            </p>
          </div>

          {/* Transactions List */}
          <div className="space-y-3">
            {filteredPayments.length === 0 ? (
              <div className="rounded-2xl p-6 bg-white dark:bg-[#111] border border-gray-100 dark:border-[#222] text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No transactions yet.
                </p>
              </div>
            ) : (
              filteredPayments.map((p, idx) => (
                <motion.article
                  key={p._id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  whileHover={{ translateY: -4 }}
                  className="group rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#111216] border border-gray-100 dark:border-[#232323] shadow-sm flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex items-center justify-center rounded-lg w-12 h-12 bg-gradient-to-br from-[#ffecec] to-[#fff6f6] dark:from-[#2a100f] dark:to-[#2b0f0f]">
                      <CreditCard className="w-5 h-5 text-[#E61A1A]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate capitalize">
                        {p.metadata?.paymentType?.replace("_", " ") ||
                          "Payment"}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {p.metadata?.paymentMethod || "Paystack"} •{" "}
                        {formatDate(p.createdAt)}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {formatCurrency(Number(p.amount))}
                    </span>
                    {renderStatus(p.status)}
                  </div>
                </motion.article>
              ))
            )}
          </div>
        </section>

        {/* Right Aside */}
        <aside className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white dark:bg-[#0f1012] border border-gray-100 dark:border-[#232323] p-5 shadow-sm"
          >
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Overview
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg p-3 bg-gray-50 dark:bg-[#0b1113] border border-gray-100 dark:border-[#1b1b1b]">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Payments
                </p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {payments.length}
                </p>
              </div>
              <div className="rounded-lg p-3 bg-gray-50 dark:bg-[#0b1113] border border-gray-100 dark:border-[#1b1b1b]">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Successful
                </p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {successfulPayments.length}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white dark:bg-[#0f1012] border border-gray-100 dark:border-[#232323] p-5 shadow-sm"
          >
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Need help with a charge?
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              If you don’t recognize an item, contact support and include the
              date & amount.
            </p>

            <a
              href="mailto:support@letscr8t.com"
              className="mt-4 block text-center px-3 py-2 rounded-lg bg-[#E61A1A] hover:bg-[#c81818] text-white transition text-sm font-medium"
            >
              Contact Support
            </a>
          </motion.div>
        </aside>
      </main>
    </section>
  );
}
