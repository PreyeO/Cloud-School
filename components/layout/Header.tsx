"use client";

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "../ui/sidebar";
import { motion } from "framer-motion";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { notify } from "@/lib/notify";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const { user, clearAuth } = useAuthStore();

  const fullName = user
    ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
    : "";

  const initials =
    user && user.firstName && user.lastName
      ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
      : "";

  const handleLogout = () => {
    notify.info("Logging out...");
    clearAuth();

    setTimeout(() => {
      notify.success("Logged out successfully");
      router.push("/signin");
    }, 800);
  };

  if (!user) return null;

  return (
    <header className="sticky bg-sidebar top-0 z-50 w-full h-16  backdrop-blur-xl px-6 flex items-center justify-between shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="cursor-pointer" />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-bold tracking-tight"
        ></motion.h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            className="relative text-[#595959] hover:text-[#E51919] transition-colors"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#E51919]" />
          </Button>
        </motion.div>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.div whileTap={{ scale: 0.9 }}>
              <div className="w-10 h-10 rounded-full  bg-[#E51919] text-white flex items-center justify-center font-semibold text-sm select-none cursor-pointer hover:opacity-90 transition-all duration-300">
                {initials || "A"}
              </div>
            </motion.div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className=" mt-2 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 bg-white/95 backdrop-blur-xl"
          >
            <DropdownMenuLabel className="font-semibold text-[#000000]">
              {fullName || "My Account"}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="hover:text-[#E51919] cursor-pointer">
              <Link href="/student/profile">Profile</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-[#E51919] font-medium cursor-pointer"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
