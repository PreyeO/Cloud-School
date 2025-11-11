"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Calendar, Mail, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useUser } from "@/hooks/useUser";

export default function AdminStudentProfile({ id }: { id: string }) {
  const { data: user, isLoading, isError, refetch } = useUser(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <span className="text-gray-500 animate-pulse text-lg">
          Loading Profile...
        </span>
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="p-8 text-center text-red-600">
        Unable to load profile.{" "}
        <button
          onClick={() => refetch()}
          className="ml-2 px-4 py-2 rounded bg-red-50 text-red-700 font-medium"
        >
          Retry
        </button>
      </div>
    );
  }

  const initials =
    (user.firstName?.[0] ?? "U").toUpperCase() +
    (user.lastName?.[0] ?? "").toUpperCase();

  const APPLICATION_FEE = 20000;
  const schoolFeesPaid = user.subscription?.totalAmountPaid ?? 0;
  const totalPaid =
    (user.applicationFeePaid ? APPLICATION_FEE : 0) + schoolFeesPaid;

  const formatCurrency = (val?: number) =>
    val == null ? "—" : `₦${Number(val).toLocaleString()}`;

  const handleEmailStudent = () => {
    window.location.href = `mailto:${user.email}`;
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* HEADER */}

      <div className="relative bg-black h-44 px-6 flex ">
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between ">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-3xl font-bold text-[#F9BABA] flex-shrink-0">
            {initials}
          </div>

          {/* Name & Email */}
          <div className="flex-1 ml-6 flex flex-col justify-center text-left">
            <h1 className="text-3xl font-bold text-white leading-tight">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-gray-300 mt-1">{user.email}</p>
            <p className="text-gray-400 text-sm mt-1">
              ID: <code>{user.id}</code>
            </p>
          </div>

          {/* Email Button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleEmailStudent}
              className="px-6 py-2 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition"
            >
              Email {user.firstName}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-20 px-6 space-y-10">
        {/* NAME & ACTION */}

        {/* METRICS CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center">
            <p className="text-gray-500 text-sm">Total Paid</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">
              {formatCurrency(totalPaid)}
            </p>
            <div className="w-full mt-3">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mb-1">
                <div
                  className="h-2 bg-black rounded-full"
                  style={{
                    width: `${
                      ((user.applicationFeePaid ? APPLICATION_FEE : 0) /
                        totalPaid) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-gray-400 text-xs">
                <span>
                  Application Fee:{" "}
                  {formatCurrency(
                    user.applicationFeePaid ? APPLICATION_FEE : 0
                  )}
                </span>
                <span>School Fees: {formatCurrency(schoolFeesPaid)}</span>
              </div>
            </div>
          </Card>

          <Card className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center">
            <p className="text-gray-500 text-sm">Status</p>
            <p
              className={`mt-2 font-semibold text-lg ${
                user.status === "applied"
                  ? "text-yellow-600"
                  : user.status === "enrolled"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {user.status}
            </p>
          </Card>

          <Card className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center">
            <p className="text-gray-500 text-sm">Last Login</p>
            <p className="mt-2 font-medium">
              {user.lastLogin ? formatDate(user.lastLogin) : "—"}
            </p>
          </Card>
        </div>

        {/* DETAILS GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md rounded-2xl p-6">
            <CardHeader>
              <CardTitle className="text-gray-900 font-semibold text-lg">
                Contact Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 mt-2">
              <InfoRow
                icon={<Phone className="w-5 h-5 text-gray-400" />}
                label="Phone"
                value={user.phoneNumber ?? "—"}
              />
              <InfoRow
                icon={<MapPin className="w-5 h-5 text-gray-400" />}
                label="Location"
                value={`${user.stateOfResidence ?? "—"}, ${
                  user.countryOfResidence ?? "—"
                }`}
              />
              <InfoRow
                icon={<Calendar className="w-5 h-5 text-gray-400" />}
                label="DOB"
                value={user.dateOfBirth ? formatDate(user.dateOfBirth) : "—"}
              />
              <InfoRow
                icon={<Clock className="w-5 h-5 text-gray-400" />}
                label="Account Created"
                value={formatDate(user.createdAt)}
              />
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl p-6">
            <CardHeader>
              <CardTitle className="text-gray-900 font-semibold text-lg">
                Profile & Enrollment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 mt-2">
              <InfoRow label="Gender" value={user.gender ?? "—"} />
              <InfoRow
                label="Employment Status"
                value={user.employmentStatus ?? "—"}
              />
              <InfoRow label="Academy Level" value={user.academyLevel ?? "—"} />
              <InfoRow
                label="Heard About Us"
                value={user.howDidYouHearAboutUs ?? "—"}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Helper Component for Info Rows
function InfoRow({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-medium text-gray-900">{value}</p>
      </div>
    </div>
  );
}
