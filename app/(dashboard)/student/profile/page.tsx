"use client";
import dynamic from "next/dynamic";

const ProfileScreen = dynamic(
  () => import("@/components/dashboard-screens/students/Profile"),
  { ssr: false }
);

const ProfilePage = () => {
  return <ProfileScreen />;
};
export default ProfilePage;
