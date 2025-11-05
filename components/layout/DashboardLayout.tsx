"use client";

import React from "react";
import { useAuthStore } from "@/store/useAuthStore";
import Header from "./Header";
import {
  Sidebar,
  SidebarProvider,
  SidebarInset,
  SidebarRail,
} from "@/components/ui/sidebar";
import SidebarMenu from "./SidebarMenu";
import UpdateDetailsModal from "../modals/UpdateDetailsModal";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthStore();

  const role =
    user?.role === "admin" || user?.role === "super_admin"
      ? "admin"
      : "student";

  return (
    <SidebarProvider className="">
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarMenu role={role} />
          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <Header />
          <UpdateDetailsModal />
          <main className="p-6 bg-[#F8F8F8] dark:bg-[#0b0b0b]">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
