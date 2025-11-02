"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
import { Loader2, Mail, Phone, MapPin, Calendar, User } from "lucide-react";

import { formatDate } from "@/lib/utils";
import { useUser } from "@/hooks/useUser";

export default function UserProfileView({ id }: { id: string }) {
  const { data: user, isLoading, isError } = useUser(id);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
      </div>
    );

  if (isError || !user)
    return <p className="text-center text-red-500">Unable to load profile.</p>;

  const subscription = user.subscription;

  return (
    <section className="p-6 md:p-10 bg-[#f9fafb] dark:bg-[#0b0b0b] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Profile Header */}
        <Card>
          <CardHeader className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#E51919]/10 flex items-center justify-center">
                <User className="w-8 h-8 text-[#E51919]" />
              </div>
              <div>
                <CardTitle className="text-2xl font-semibold">
                  {user.firstName} {user.lastName}
                </CardTitle>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <Badge
              variant="outline"
              className={`capitalize px-4 py-1 text-sm ${
                user.status === "applied"
                  ? "border-yellow-400 text-yellow-600"
                  : user.status === "enrolled"
                  ? "border-green-400 text-green-600"
                  : "border-gray-400 text-gray-600"
              }`}
            >
              {user.status}
            </Badge>
          </CardHeader>
        </Card>

        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" /> {user.phoneNumber ?? "—"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-medium capitalize">{user.gender ?? "—"}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Date of Birth</p>
              <p className="font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(user.dateOfBirth)}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Country / State</p>
              <p className="font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {user.countryOfResidence ?? "—"}, {user.stateOfResidence ?? "—"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Employment Status</p>
              <p className="font-medium capitalize">
                {user.employmentStatus ?? "—"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Academy Level</p>
              <p className="font-medium capitalize">
                {user.academyLevel ?? "—"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Email Verified</p>
              <p className="font-medium">
                {user.isEmailVerified ? "Yes" : "No"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Application Fee Paid</p>
              <p className="font-medium">
                {user.applicationFeePaid ? "Yes" : "No"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Created At</p>
              <p className="font-medium">{formatDate(user.createdAt)}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Last Login</p>
              <p className="font-medium">{formatDate(user.lastLogin)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
