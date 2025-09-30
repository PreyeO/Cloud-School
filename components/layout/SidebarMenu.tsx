"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu as Menu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { SidebarItem } from "@/types/route";
import { adminRoutes, studentRoutes } from "@/app/data/routes";
import Logo from "../ui/logo";

type SidebarMenuProps = {
  role: "student" | "admin";
};

const SidebarMenu: React.FC<SidebarMenuProps> = ({ role }) => {
  const pathname = usePathname();
  const routes: SidebarItem[] = role === "admin" ? adminRoutes : studentRoutes;

  return (
    <SidebarContent>
      {/* Sidebar Logo + Branding */}
      <SidebarHeader className="flex items-center">
        <Logo />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarGroup>
        <SidebarGroupLabel>
          {role === "admin" ? "Admin Menu" : "Student Menu"}
        </SidebarGroupLabel>

        <SidebarGroupContent>
          <Menu>
            {routes.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.href ?? "#"} passHref>
                    <SidebarMenuButton
                      isActive={isActive}
                      className={`
                        transition-colors
                        ${
                          isActive
                            ? "bg-[#E61A1A] text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
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
