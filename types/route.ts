import { LucideIcon } from "lucide-react";

export type SidebarItem = {
  title: string;
  icon: LucideIcon;
  active?: boolean;
  onClick?: () => void;
  href?: string;
};
