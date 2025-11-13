"use client";

import React, { useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { useUser } from "@/hooks/useUser";
import Paragraph from "@/components/ui/typography/paragraph";
import Title from "@/components/ui/typography/title";
import MetricsCard from "./MetricsCard";
import StatusBadge from "./StatusBadge";
import InfoRow from "./InfoRow";
import LoadingState from "@/components/ui/loaders/loading-state";

interface Props {
  id: string;
}

const AdminStudentProfile = ({ id }: Props) => {
  const { data: user, isLoading, isError, refetch } = useUser(id);

  const APPLICATION_FEE = 20000;
  const schoolFeesPaid = user?.subscription?.totalAmountPaid ?? 0;
  const totalPaid =
    (user?.applicationFeePaid ? APPLICATION_FEE : 0) + schoolFeesPaid;

  const formatCurrency = (val?: number) =>
    val == null ? "—" : `₦${Number(val).toLocaleString()}`;

  const initials = useMemo(
    () =>
      `${user?.firstName?.[0] ?? "U"}${
        user?.lastName?.[0] ?? ""
      }`.toUpperCase(),
    [user]
  );

  const handleEmailStudent = () => {
    if (user?.email) window.location.href = `mailto:${user.email}`;
  };

  if (isLoading) return <LoadingState />;

  if (isError || !user)
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

  return (
    <section className="min-h-screen md:px-10 pt-10">
      {/* HEADER */}
      <div className="relative bg-black h-44 px-6 flex items-center">
        <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-4">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center text-3xl font-bold text-[#E51919] flex-shrink-0">
            {initials}
          </div>

          {/* Name & Email */}
          <div className="flex-1 text-center md:text-left">
            <Title className="text-white text-xl md:text-2xl">
              {user.firstName} {user.lastName}
            </Title>
            <Paragraph className="text-gray-300 mt-1">{user.email}</Paragraph>
            <Paragraph className="text-gray-400 text-sm mt-1">
              ID: <code>{user.id}</code>
            </Paragraph>
          </div>

          {/* Email Button */}
          <button
            onClick={handleEmailStudent}
            className="px-6 py-2 rounded-full bg-[#E51919] text-white font-medium hover:bg-red-700 transition"
          >
            Email {user.firstName}
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-20 px-6 space-y-10">
        {/* METRICS CARDS */}
        <div className="grid grid-cols-1 xl:grid-cols-3  lg:grid-cols-2 gap-6">
          <MetricsCard
            label="Total Paid"
            value={formatCurrency(totalPaid)}
            breakdown={[
              {
                label: "Application Fee",
                value: formatCurrency(
                  user.applicationFeePaid ? APPLICATION_FEE : 0
                ),
              },
              { label: "School Fees", value: formatCurrency(schoolFeesPaid) },
            ]}
            progress={
              totalPaid
                ? ((user.applicationFeePaid ? APPLICATION_FEE : 0) /
                    totalPaid) *
                  100
                : 0
            }
          />

          <MetricsCard
            label="Status"
            value={<StatusBadge status={user.status} />}
          />

          <MetricsCard
            label="Last Login"
            value={user.lastLogin ? formatDate(user.lastLogin) : "—"}
          />
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md rounded-2xl md:p-6 p-3">
            <CardHeader>
              <CardTitle className="text-gray-900 font-semibold md:text-lg text-sm">
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

          <Card className="shadow-md rounded-2xl md:p-6 p-3">
            <CardHeader>
              <CardTitle className="text-gray-900 font-semibold md:text-lg text-sm">
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
};
export default AdminStudentProfile;
