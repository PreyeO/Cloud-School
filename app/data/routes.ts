import { SidebarItem } from "@/types/route";
import {
  LayoutDashboard,
  FileText,
  CreditCard,
  BookOpen,
  ClipboardCheck,
  LifeBuoy,
  Users,
  Settings,
  BarChart3,
} from "lucide-react";

export const studentRoutes: SidebarItem[] = [
  {
    title: "Program Overview",
    href: "/dashboard/overview",
    icon: LayoutDashboard,
  },
  { title: "Application", href: "/dashboard/application", icon: FileText },
  { title: "Payment History", href: "/dashboard/payments", icon: CreditCard },
  { title: "Study Kits", href: "/dashboard/study-kits", icon: BookOpen },
  { title: "Assessment", href: "/dashboard/assessment", icon: ClipboardCheck },
  { title: "Support", href: "/dashboard/support", icon: LifeBuoy },
];

export const adminRoutes: SidebarItem[] = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "Applicants", href: "/admin/applicants", icon: Users },
  { title: "Programs", href: "/admin/programs", icon: BookOpen },
  { title: "Payments", href: "/admin/payments", icon: CreditCard },
  { title: "Assessments", href: "/admin/assessments", icon: ClipboardCheck },
  { title: "Reports", href: "/admin/reports", icon: BarChart3 },
  { title: "Settings", href: "/admin/settings", icon: Settings },
  { title: "Support Tickets", href: "/admin/support", icon: LifeBuoy },
];
