"use client";

import React from "react";
import Header from "./Header";

import {
  Sidebar,
  SidebarProvider,
  SidebarInset,
  SidebarRail,
} from "@/components/ui/sidebar";
import SidebarMenu from "./SidebarMenu";
import UpdateDetailsModal from "../modals/UpdateDetailsModal";

type DashboardLayoutProps = {
  children: React.ReactNode;
  role: "student" | "admin";
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  role,
}) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar className=" ">
          <SidebarMenu role={role} />
          <SidebarRail />
        </Sidebar>

        {/* Main Content Area */}
        <SidebarInset>
          <Header />
          <UpdateDetailsModal />
          <main className="p-6 bg-[#F8F8F8] dark:bg-[#0b0b0b]  ">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
