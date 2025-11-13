"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTransactions } from "@/hooks/useTransactions";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import { Transaction } from "@/types/payment";
import Title from "@/components/ui/typography/title";
import Paragraph from "@/components/ui/typography/paragraph";
import { formatCurrency } from "@/lib/utils";
import PaymentCard from "./PaymentCard";
import SubTitle from "@/components/ui/typography/sub-title";
import LinkButton from "@/components/ui/btns/link-button";
import LoadingState from "@/components/ui/loaders/loading-state";

const PaymentHistory = () => {
  const { data, isLoading, isError } = useTransactions();
  const [activeTab, setActiveTab] = useState<"all" | "success" | "failed">(
    "all"
  );

  const payments: Transaction[] = data?.data || [];

  const successfulPayments = payments.filter(
    (p) => p.status?.toLowerCase() === "success" || p.status === "Successful"
  );
  const failedPayments = payments.filter(
    (p) => p.status?.toLowerCase() === "failed" || p.status === "abandoned"
  );

  const totalPaid = successfulPayments.reduce(
    (sum, p) => sum + Number(p.amount || 0),
    0
  );

  const filteredPayments =
    activeTab === "success"
      ? successfulPayments
      : activeTab === "failed"
      ? failedPayments
      : payments;

  if (isLoading)
    return (
      <>
        <LoadingState />
      </>
    );

  if (isError)
    return (
      <section className="min-h-screen p-8 flex items-center justify-center text-gray-500">
        Failed to load transactions. Please try again.
      </section>
    );

  return (
    <section className="min-h-screen p-4 sm:p-8  transition-colors">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <Title>Payment History</Title>
            <Paragraph className="mt-1 max-w-xl">
              Track all your successful payments and transactions in one place.
              For issues, reach out to Support for quick assistance.
            </Paragraph>
          </div>

          <div className="w-full sm:w-auto">
            <div className="rounded-2xl bg-white dark:bg-[#121212] border border-gray-100 dark:border-[#222] shadow-sm px-4 py-3 flex items-center gap-4">
              <div className="flex items-center justify-center rounded-md w-12 h-12 bg-green-50 dark:bg-green-900/30">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <Paragraph className="text-xs">Total paid</Paragraph>
                <Title className="text-lg">{formatCurrency(totalPaid)}</Title>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Transactions List */}
        <section className="lg:col-span-2 space-y-4">
          <Tabs
            value={activeTab}
            onValueChange={(value) =>
              setActiveTab(value as "all" | "success" | "failed")
            }
          >
            {" "}
            <TabsList className="relative flex items-center justify-between bg-white dark:bg-[#111] border border-gray-200 dark:border-[#222] rounded-full p-1 shadow-sm">
              {" "}
              {(["all", "success", "failed"] as const).map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="relative flex-1 text-sm font-medium px-5 py-2 rounded-full transition-all data-[state=active]:text-white data-[state=active]:font-semibold"
                >
                  {" "}
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
                  )}{" "}
                  <span className="relative z-10 capitalize">
                    {" "}
                    {tab === "success" ? "Successful" : tab}{" "}
                  </span>{" "}
                </TabsTrigger>
              ))}{" "}
            </TabsList>{" "}
          </Tabs>

          <div className="space-y-3">
            {filteredPayments.length === 0 ? (
              <Paragraph className="text-center p-6 rounded-2xl bg-white dark:bg-[#111] border border-gray-100 dark:border-[#222]">
                No transactions yet.
              </Paragraph>
            ) : (
              filteredPayments.map((p, idx) => (
                <PaymentCard key={p._id} payment={p} index={idx} />
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
            <Paragraph className="text-sm font-medium">
              Transactions Overview
            </Paragraph>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg p-3 bg-gray-50 dark:bg-[#0b1113] border border-gray-100 dark:border-[#1b1b1b]">
                <Paragraph className="text-xs">Total Payments</Paragraph>
                <Title className="text-lg">{payments.length}</Title>
              </div>
              <div className="rounded-lg p-3 bg-gray-50 dark:bg-[#0b1113] border border-gray-100 dark:border-[#1b1b1b]">
                <Paragraph className="text-xs">Successful</Paragraph>
                <Title className="text-lg">{successfulPayments.length}</Title>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white dark:bg-[#0f1012] border border-gray-100 dark:border-[#232323] p-5 shadow-sm"
          >
            <SubTitle className="">Need help with a payment?</SubTitle>
            <Paragraph className="text-xs mt-2">
              If you notice any incorrect charge or missing record, contact our
              support team with the transaction date and amount.
            </Paragraph>

            <LinkButton
              href="/student/support"
              className="bg-[#E61A1A] hover:bg-[#c81818] mt-4"
            >
              Contact Support
            </LinkButton>
          </motion.div>
        </aside>
      </main>
    </section>
  );
};
export default PaymentHistory;
