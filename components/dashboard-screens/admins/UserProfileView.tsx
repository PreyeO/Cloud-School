"use client";

import React, { useMemo } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  Phone,
  MapPin,
  Calendar,
  User,
  Mail,
  Wallet,
  Clock,
  RefreshCw,
  DollarSign,
} from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useUser } from "@/hooks/useUser";

type Subscription = {
  _id: string;
  status: string;
  startDate?: string;
  endDate?: string;
  totalAmountPaid?: number;
  amountRemaining?: number;
  nextPaymentDue?: string;
  nextPaymentAmount?: number;
  lastPaymentDate?: string;
  autoRenew?: boolean;
  metadata?: Record<string, any>;
};

export default function UserProfileView({ id }: { id: string }) {
  const { data: user, isLoading, isError } = useUser(id);

  const subscription: Subscription | null =
    (user.subscription as Subscription) || null;

  const formatCurrency = (val?: number) =>
    val == null ? "—" : `₦${Number(val).toLocaleString()}`;

  const paymentTotal =
    (subscription?.totalAmountPaid ?? 0) + (subscription?.amountRemaining ?? 0);
  const paidPct =
    paymentTotal > 0
      ? Math.round(((subscription?.totalAmountPaid ?? 0) / paymentTotal) * 100)
      : 0;

  const statusColor = (s: string) =>
    s === "applied"
      ? "yellow"
      : s === "admitted"
      ? "green"
      : s === "withdrawn"
      ? "red"
      : "gray";

  const timeline = useMemo(() => {
    const events: { id: string; title: string; time?: string }[] = [];

    events.push({
      id: "reg",
      title: `Registered — ${formatDate(user.createdAt)}`,
    });
    if (user.lastLogin)
      events.push({
        id: "login",
        title: `Last login — ${formatDate(user.lastLogin)}`,
      });
    if (user.applicationFeePaid)
      events.push({ id: "appfee", title: `Application fee paid` });
    if (subscription?.lastPaymentDate)
      events.push({
        id: "lastpay",
        title: `Last payment — ${formatDate(subscription.lastPaymentDate)}`,
      });

    return events;
  }, [user, subscription]);

  // Payment History: if you have a payments endpoint use that. Here we derive basic rows from subscription metadata.
  const paymentHistory = useMemo(() => {
    if (!subscription) return [];
    // If subscription.metadata includes registration payment etc, show those; else show last payment only
    const rows: { id: string; date: string; amount: number; note?: string }[] =
      [];

    if (
      subscription?.metadata?.registrationDate &&
      subscription.totalAmountPaid
    ) {
      rows.push({
        id: "reg",
        date: subscription.metadata.registrationDate,
        amount: subscription.totalAmountPaid,
        note: "Registration / first payment",
      });
    } else if (subscription?.lastPaymentDate && subscription.totalAmountPaid) {
      rows.push({
        id: "last",
        date: subscription.lastPaymentDate,
        amount: subscription.totalAmountPaid,
        note: "Last payment",
      });
    }

    // leave room for more rows if your backend returns a payments array later
    return rows;
  }, [subscription]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
      </div>
    );

  if (isError || !user)
    return <p className="text-center text-red-500">Unable to load profile.</p>;

  return (
    <section className="p-6 md:p-10 bg-[#f9fafb] dark:bg-[#0b0b0b] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <Card>
          <CardHeader className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 dark:from-neutral-800 dark:to-black flex items-center justify-center text-white text-xl font-semibold">
                {/* Simple initials avatar */}
                <span className="text-2xl text-[#0b0b0b] dark:text-white">
                  {(user.firstName?.[0] ?? "U") + (user.lastName?.[0] ?? "")}
                </span>
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> {user.email}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  ID: <span className="font-mono">{user.id ?? user._id}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <Badge
                  variant="outline"
                  className={`capitalize px-4 py-1 text-sm border-${statusColor(
                    user.status
                  )}-400 text-${statusColor(user.status)}-600`}
                >
                  {user.status}
                </Badge>
                <div className="text-xs text-gray-500 mt-1">
                  Role: <span className="capitalize">{user.role}</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white dark:bg-neutral-900 border shadow-sm hover:shadow-md text-sm"
                >
                  <RefreshCw className="w-4 h-4" /> Refresh
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#0b84ff] text-white hover:bg-[#0566d1] text-sm"
                >
                  <Wallet className="w-4 h-4" /> Make Payment
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            {/* Payment Summary (big) */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm text-gray-500">Payment Summary</h3>
                  <p className="text-lg font-semibold">
                    {subscription ? subscription.status : "No subscription"}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">Total paid</p>
                  <p className="text-lg font-semibold">
                    {formatCurrency(subscription?.totalAmountPaid)}
                  </p>
                </div>
              </div>

              {/* progress */}
              <div className="w-full">
                <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-green-400 to-green-600"
                    style={{ width: `${paidPct}%` }}
                    aria-hidden
                  />
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span>{paidPct}% paid</span>
                  <span>
                    {formatCurrency(subscription?.totalAmountPaid)} paid •{" "}
                    {formatCurrency(subscription?.amountRemaining)} remaining
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-3 mt-4">
                <div className="rounded-md border p-3 bg-white dark:bg-neutral-900">
                  <p className="text-xs text-gray-500">Next Due</p>
                  <p className="font-medium">
                    {subscription?.nextPaymentDue
                      ? formatDate(subscription.nextPaymentDue)
                      : "—"}
                  </p>
                  <p className="text-xs text-gray-400">
                    {subscription?.nextPaymentAmount
                      ? formatCurrency(subscription.nextPaymentAmount)
                      : ""}
                  </p>
                </div>

                <div className="rounded-md border p-3 bg-white dark:bg-neutral-900">
                  <p className="text-xs text-gray-500">Auto renew</p>
                  <p className="font-medium">
                    {subscription?.autoRenew ? "On" : "Off"}
                  </p>
                  <p className="text-xs text-gray-400">
                    {subscription?.status ?? ""}
                  </p>
                </div>

                <div className="rounded-md border p-3 bg-white dark:bg-neutral-900">
                  <p className="text-xs text-gray-500">Last payment</p>
                  <p className="font-medium">
                    {subscription?.lastPaymentDate
                      ? formatDate(subscription.lastPaymentDate)
                      : "—"}
                  </p>
                  <p className="text-xs text-gray-400">
                    {subscription?.totalAmountPaid
                      ? formatCurrency(subscription.totalAmountPaid)
                      : ""}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border bg-white dark:bg-neutral-900">
                  <DollarSign className="w-4 h-4" /> Record Payment
                </button>

                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border bg-white dark:bg-neutral-900">
                  <Clock className="w-4 h-4" /> Send Payment Reminder
                </button>

                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md border bg-white dark:bg-neutral-900">
                  <Mail className="w-4 h-4" /> Email User
                </button>
              </div>
            </div>

            {/* Right column: small cards */}
            <div className="space-y-4">
              <div className="rounded-md border p-4 bg-white dark:bg-neutral-900">
                <p className="text-xs text-gray-500">Application Fee</p>
                <p className="font-medium mt-1">
                  {user.applicationFeePaid ? "Paid" : "Not paid"}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Use this to quickly see application completion.
                </p>
              </div>

              <div className="rounded-md border p-4 bg-white dark:bg-neutral-900">
                <p className="text-xs text-gray-500">How they heard</p>
                <p className="font-medium mt-1 capitalize">
                  {user.howDidYouHearAboutUs ?? "—"}
                </p>
              </div>

              <div className="rounded-md border p-4 bg-white dark:bg-neutral-900">
                <p className="text-xs text-gray-500">Account created</p>
                <p className="font-medium mt-1">{formatDate(user.createdAt)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Subscription & Payments */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription & Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-left text-xs text-gray-500">
                      <tr>
                        <th className="py-2">Date</th>
                        <th className="py-2">Amount</th>
                        <th className="py-2">Note</th>
                        <th className="py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paymentHistory.length > 0 ? (
                        paymentHistory.map((p) => (
                          <tr key={p.id} className="border-t">
                            <td className="py-3">{formatDate(p.date)}</td>
                            <td className="py-3 font-medium">
                              {formatCurrency(p.amount)}
                            </td>
                            <td className="py-3 text-xs text-gray-500">
                              {p.note}
                            </td>
                            <td className="py-3">
                              <Badge variant="outline" className="px-3 py-1">
                                Completed
                              </Badge>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="border-t">
                          <td
                            colSpan={4}
                            className="py-6 text-center text-gray-500"
                          >
                            No payments recorded yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Personal / Contact */}
          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="font-medium">{user.phoneNumber ?? "—"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-medium">
                      {user.countryOfResidence ?? "—"},{" "}
                      {user.stateOfResidence ?? "—"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">DOB</p>
                    <p className="font-medium">
                      {user.dateOfBirth ? formatDate(user.dateOfBirth) : "—"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-500 space-y-2">
                  <div>
                    <p className="text-xs">Gender</p>
                    <p className="font-medium capitalize">
                      {user.gender ?? "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs">Employment</p>
                    <p className="font-medium capitalize">
                      {user.employmentStatus ?? "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs">Academy Level</p>
                    <p className="font-medium capitalize">
                      {user.academyLevel ?? "—"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}
