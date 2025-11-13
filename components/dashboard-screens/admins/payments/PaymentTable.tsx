"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Payment = {
  id: string;
  student: string;
  plan: string;
  type: string;
  amount: string;
  status: string;
  date: string;
};

export function PaymentTable({ payments }: { payments: Payment[] }) {
  return (
    <Card className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Transactions
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="py-3 px-4">Student</th>
              <th className="py-3 px-4">Plan</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/50 dark:hover:bg-[#151515] transition-all"
              >
                <td className="py-3 px-4 font-medium">{tx.student}</td>
                <td className="py-3 px-4">{tx.plan}</td>
                <td className="py-3 px-4">{tx.type}</td>
                <td className="py-3 px-4 font-semibold">{tx.amount}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tx.status === "Successful"
                        ? "bg-green-100 text-green-700 "
                        : "bg-yellow-100 text-yellow-700 "
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500 dark:text-gray-400">
                  {tx.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
