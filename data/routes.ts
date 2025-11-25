import { SidebarItem } from "@/types/route";
import {
  LayoutDashboard,
  CreditCard,
  BookOpen,
  ClipboardCheck,
  Settings,
  BookUser,
  GraduationCap,
  UserCircle,
  CheckCircle,
  MessageSquareMore,
} from "lucide-react";

export const studentRoutes: SidebarItem[] = [
  {
    title: "Overview",
    href: "/student",
    icon: LayoutDashboard,
  },
  {
    title: "Program",
    href: "/student/program",
    icon: GraduationCap,
  },
  {
    title: "Payment History",
    href: "/student/payment-history",
    icon: CreditCard,
  },
  {
    title: "Study Kits",
    href: "/student/study-kits",
    icon: BookOpen,
  },
  {
    title: "Assessment",
    href: "/student/assessment",
    icon: ClipboardCheck,
  },
  {
    title: "Enrollment",
    href: "/student/enrollment",
    icon: CheckCircle,
  },
  {
    title: "Support",
    href: "/student/support",
    icon: MessageSquareMore,
  },
  {
    title: "Profile",
    href: "/student/profile",
    icon: UserCircle,
  },
];

export const adminRoutes: SidebarItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Directory",
    href: "/admin/directory",
    icon: BookUser,
  },

  {
    title: "Payments",
    href: "/admin/payment",
    icon: CreditCard,
  },

  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];
