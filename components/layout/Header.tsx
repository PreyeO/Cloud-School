"use client";

import { Bell, Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
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
import { ModeToggle } from "../ui/mode-toggle";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full h-16 border-b bg-background px-4 flex items-center justify-between shadow">
      <SidebarTrigger />
      {/* Left Section */}
      <h2 className="text-lg font-semibold text-foreground">Welcome Preye</h2>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <ModeToggle />

        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative text-foreground hover:text-[#E61A1A]"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-[#E61A1A]" />
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-gray-200 dark:border-gray-700 w-9 h-9"
            >
              <User className="h-5 w-5 text-foreground" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-[#E61A1A]">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
