import { LucideIcon } from "lucide-react";

export type SummaryDataItem = {
  title: string;
  icon: LucideIcon;
  value: number;
};

export interface MarketingFunnelItem {
  value: string;
  label: string;
  count: number;
}
export type StatCardProps = {
  label: string;
  value: string | number;
  sub?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
