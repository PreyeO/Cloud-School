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
  Sidebar,
} from "@/components/ui/sidebar";
import { SidebarItem } from "@/types/route";
import { adminRoutes, studentRoutes } from "@/data/routes";
import Logo from "../ui/logo";

type SidebarMenuProps = {
  role: "student" | "admin";
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ role }) => {
  const pathname = usePathname();
  const routes: SidebarItem[] = role === "admin" ? adminRoutes : studentRoutes;

  return (
    <Sidebar className="cursor-ponter">
      <SidebarContent className="overflow-hidden  ">
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
                  <SidebarMenuItem key={item.title} className="pb-1 ">
                    <Link href={item.href ?? "#"} passHref>
                      <SidebarMenuButton
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
    </Sidebar>
  );
};

export default SidebarMenu;
