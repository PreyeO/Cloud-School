"use client";

import { useProfile } from "@/hooks/useProfile";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, Briefcase } from "lucide-react";
import { formatDate } from "@/lib/utils";
import LoadingState from "@/components/ui/loaders/loading-state";
import Paragraph from "@/components/ui/typography/paragraph";
import SubTitle from "@/components/ui/typography/sub-title";
import Title from "@/components/ui/typography/title";

export default function ProfileScreen() {
  const { data, isLoading } = useProfile();
  const user = data?.data;

  if (isLoading) return <LoadingState />;

  if (!user) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-gray-400 dark:text-gray-500">
        No profile data available.
      </div>
    );
  }

  const initials = `${user.firstName?.[0] || ""}${
    user.lastName?.[0] || ""
  }`.toUpperCase();

  const personalDetails = [
    { label: "Full Name", value: user.fullName },
    { label: "Gender", value: user.gender || "-" },
    { label: "Date of Birth", value: formatDate(user.dateOfBirth) },
    { label: "Country", value: user.countryOfResidence || "-" },
    { label: "State", value: user.stateOfResidence || "-" },
    { label: "Academy Level", value: user.academyLevel || "-" },
    { label: "Employment Status", value: user.employmentStatus || "-" },
    {
      label: "Application Fee Paid",
      value: user.applicationFeePaid ? "Yes" : "No",
    },
    { label: "Date Joined", value: formatDate(user.createdAt) },
  ];

  return (
    <section className="p-4 sm:p-6 md:p-10 min-h-screen space-y-8">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl bg-white dark:bg-[#161616] border border-gray-100 dark:border-[#252525] shadow-sm hover:shadow-md transition-all p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6"
      >
        {/* Avatar */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#e61a1a] to-[#ff5757] flex items-center justify-center text-3xl font-bold text-white shadow-lg">
          {initials}
          <div className="absolute bottom-1 right-1 h-4 w-4 bg-green-500 border-2 border-white dark:border-[#161616] rounded-full" />
        </div>

        {/* User Info */}
        <div className="flex-1 text-center md:text-left space-y-1">
          <Title className="text-lg sm:text-xl md:text-2xl">
            {user.fullName}
          </Title>
          <div className="flex flex-col items-center md:items-start gap-1 text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            <Paragraph className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> {user.email}
            </Paragraph>
            <Paragraph className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> {user.phoneNumber || "Not provided"}
            </Paragraph>
            <Paragraph className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />{" "}
              {user.employmentStatus || "Not specified"}
            </Paragraph>
          </div>
        </div>
      </motion.div>

      {/* Info Grid */}
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {personalDetails.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-white dark:bg-[#161616] rounded-2xl border border-gray-100 dark:border-[#252525] p-5 shadow-sm hover:shadow-md transition-all"
            >
              <Paragraph className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide">
                {item.label}
              </Paragraph>
              <Paragraph className="text-gray-900 dark:text-gray-100 font-semibold mt-1 text-sm sm:text-base">
                {item.value || "-"}
              </Paragraph>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Subscription Section */}
      {!user.subscription && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-[#161616] border border-gray-100 dark:border-[#252525] rounded-3xl p-6 sm:p-8 shadow-sm text-center transition-all"
        >
          <SubTitle className="text-base sm:text-lg mb-2">
            Subscription
          </SubTitle>
          <Paragraph className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
            You currently don’t have an active subscription.
          </Paragraph>
        </motion.div>
      )}
    </section>
  );
}
