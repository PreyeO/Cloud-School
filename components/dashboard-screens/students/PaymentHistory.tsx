"use client";

import { motion } from "framer-motion";
import { CreditCard, CheckCircle2 } from "lucide-react";

interface Payment {
  id: string;
  title: string;
  amount: string;
  date: string; // ISO or readable string
  status: "Successful" | "Pending" | "Failed";
  method: string;
}

export default function PaymentHistory() {
  const payments: Payment[] = [
    {
      id: "1",
      title: "Application Fee",
      amount: "10000",
      date: "2025-09-25",
      status: "Successful",
      method: "Paystack",
    },
    {
      id: "2",
      title: "School Fees",
      amount: "250000",
      date: "2025-10-02",
      status: "Pending",
      method: "Flutterwave",
    },
    {
      id: "3",
      title: "Acceptance Fee",
      amount: "15000",
      date: "2025-09-20",
      status: "Failed",
      method: "Bank Transfer",
    },
    {
      id: "4",
      title: "Early Enrollment",
      amount: "50000",
      date: "2025-08-10",
      status: "Successful",
      method: "Paystack",
    },
  ];

  // Only show successful transactions per your request
  const successfulPayments = payments.filter((p) => p.status === "Successful");

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

  return (
    <section className="min-h-screen p-4 sm:p-8 bg-gray-50 dark:bg-[#0b0b0b] transition-colors">
      {/* Page header */}
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
              Clean view of all <strong>successful</strong> transactions. For
              troubleshooting with other payments, check Support.
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

      {/* Main content */}
      <main className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: transactions list */}
        <section className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Successful Transactions
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {successfulPayments.length} items
            </p>
          </div>

          <div className="space-y-3">
            {successfulPayments.length === 0 && (
              <div className="rounded-2xl p-6 bg-white dark:bg-[#111] border border-gray-100 dark:border-[#222] text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No successful payments yet.
                </p>
              </div>
            )}

            {successfulPayments.map((p, idx) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ translateY: -4 }}
                className="group rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#111216] border border-gray-100 dark:border-[#232323] shadow-sm flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex items-center justify-center rounded-lg w-12 h-12 bg-gradient-to-br from-[#ffecec] to-[#fff6f6] dark:from-[#2a100f] dark:to-[#2b0f0f]">
                    <CreditCard className="w-5 h-5 text-[#E61A1A]" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                      {p.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {p.method} • {formatDate(p.date)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(Number(p.amount))}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-2 text-xs font-medium text-green-600 dark:text-green-300">
                    <CheckCircle2 className="w-4 h-4" /> Successful
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Right column: summary + actions */}
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

            <div className="mt-4 border-t border-dashed border-gray-100 dark:border-[#222] pt-4">
              <button
                onClick={() =>
                  navigator.clipboard?.writeText(formatCurrency(totalPaid))
                }
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#E61A1A] hover:bg-[#c81818] text-white text-sm font-medium transition"
                aria-label="Copy total paid"
              >
                Copy total paid
              </button>
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
              If you dont recognize an item, contact support and include the
              date & amount.
            </p>

            <a
              href="mailto:support@letscr8t.com"
              className="mt-4 block text-center px-3 py-2 rounded-lg bg-transparent border border-[#E61A1A] text-[#E61A1A] hover:bg-[#E61A1A] hover:text-white transition text-sm font-medium"
            >
              Contact Support
            </a>
          </motion.div>
        </aside>
      </main>
    </section>
  );
}
