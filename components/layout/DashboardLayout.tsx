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
        <Sidebar>
          <SidebarMenu role={role} />
          <SidebarRail />
        </Sidebar>

        {/* Main Content Area */}
        <SidebarInset>
          <Header />
          <main className="p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
