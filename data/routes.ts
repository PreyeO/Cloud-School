import { SidebarItem } from "@/types/route";
import {
  LayoutDashboard,
  CreditCard,
  BookOpen,
  ClipboardCheck,
  Settings,
  BarChart3,
  BookUser,
  GraduationCap,
  FolderOpen,
  UserCircle,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export const studentRoutes: SidebarItem[] = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Program",
    href: "/dashboard/program",
    icon: GraduationCap,
  },
  {
    title: "Payment History",
    href: "/dashboard/payment-history",
    icon: CreditCard,
  },
  {
    title: "Study Kits",
    href: "/dashboard/study-kits",
    icon: BookOpen,
  },
  {
    title: "Assessment",
    href: "/dashboard/assessment",
    icon: ClipboardCheck,
  },
  {
    title: "Enrollment",
    href: "/dashboard/enrollment",
    icon: CheckCircle,
  },
  {
    title: "Support",
    href: "/dashboard/support",
    icon: MessageSquare,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
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
    title: "Programs",
    href: "/admin/programs",
    icon: FolderOpen,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Assessments",
    href: "/admin/assessments",
    icon: ClipboardCheck,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];
