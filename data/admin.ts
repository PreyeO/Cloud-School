import { SummaryDataItem } from "@/types/admin";
import { Users, CreditCard, ClipboardCheck, BookOpen } from "lucide-react";

export const summaryData: SummaryDataItem[] = [
  {
    title: "Total Applicants",
    value: 120,
    icon: Users,
  },
  {
    title: "Application Fee Paid",
    value: 100,

    icon: BookOpen,
  },
  {
    title: "Enrolled Students",
    value: 80,
    icon: CreditCard,
  },
  {
    title: "Assessments Completed",
    value: 90,
    icon: ClipboardCheck,
  },
];

export const COLORS = ["#FFA500", "#E61A1A", "#4B0082", "#00BFFF"];

export const chartData = [
  { month: "Jan", applicationFee: 20, enrolled: 15 },
  { month: "Feb", applicationFee: 25, enrolled: 20 },
  { month: "Mar", applicationFee: 30, enrolled: 25 },
  { month: "Apr", applicationFee: 25, enrolled: 20 },
  { month: "May", applicationFee: 25, enrolled: 20 },
  { month: "Jun", applicationFee: 25, enrolled: 20 },
];

export const recentApplicants = [
  {
    name: "John Doe",
    email: "john@example.com",
    applicationFee: "Paid",
    enrolled: "Yes",
    assessment: "Completed",
    appliedOn: "2025-09-10",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    applicationFee: "Paid",
    enrolled: "No",
    assessment: "Pending",
    appliedOn: "2025-09-12",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    applicationFee: "Not Paid",
    enrolled: "No",
    assessment: "Pending",
    appliedOn: "2025-09-14",
  },
];

// Sample directory dataset
export const directoryData = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    gender: "Male",
    whatsapp: "+1 234 567 890",
    phone: "+1 987 654 321",
    country: "Canada",
    signedUpOn: "2025-01-15",
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    gender: "Female",
    whatsapp: "+44 7777 888999",
    phone: "+44 1234 567890",
    country: "UK",
    signedUpOn: "2025-02-20",
  },
  {
    name: "Michael Johnson",
    email: "michaelj@example.com",
    gender: "Male",
    whatsapp: "+234 801 234 5678",
    phone: "+234 902 345 6789",
    country: "Nigeria",
    signedUpOn: "2025-03-05",
  },
];
