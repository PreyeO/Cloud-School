"use client";
import dynamic from "next/dynamic";
const Directory = dynamic(
  () => import("@/components/dashboard-screens/admins/directory/Directory"),
  { ssr: false }
);

const DirectoryPage = () => {
  return <Directory />;
};
export default DirectoryPage;
