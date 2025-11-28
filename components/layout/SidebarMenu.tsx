"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu as Menu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import { SidebarItem } from "@/types/route";
import { adminRoutes, studentRoutes } from "@/data/routes";
import Logo from "../ui/logo";

type SidebarMenuProps = {
  role: "student" | "admin";
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ role }) => {
  const { isMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();
  const routes: SidebarItem[] = role === "admin" ? adminRoutes : studentRoutes;
  const handleMenuClick = () => {
    if (isMobile) setOpenMobile(false);
  };

  return (
    <SidebarContent className="overflow-hidden bg-white ">
      {/* Sidebar Logo + Branding */}
      <SidebarHeader className="flex items-center">
        <Logo />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarGroup>
        <SidebarGroupContent>
          <Menu>
            {routes.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <SidebarMenuItem key={item.title} className="pb-4 ">
                  <Link href={item.href ?? "#"} passHref>
                    <SidebarMenuButton
                      onClick={handleMenuClick}
                      isActive={isActive}
                      className={`
                        transition-colors
                        ${
                          isActive
                            ? "bg-[#F9BABA] text-white"
                            : "hover:bg-[#F9BABA]"
                        }
                      `}
                    >
                      <Icon className="size-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </Menu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
};

export default SidebarMenu;
