// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import {
//   CreditCard,
//   Book,
//   FileText,
//   CheckCircle,
//   Archive,
//   Banknote,
// } from "lucide-react";

// export default function ApplicationScreen() {
//   const steps = [
//     {
//       number: 1,
//       title: "Pay Application Fee",
//       description:
//         "Kickstart your application by paying the non-refundable fee of #10,000.",
//       icon: <CreditCard className="h-5 w-5 text-[#E61A1A]" />,
//       cta: {
//         label: "Pay Now",
//         link: "https://paystack.com/pay/your-link",
//         primary: true,
//       },
//     },
//     {
//       number: 2,
//       title: "Access Study Kit",
//       description:
//         "Once your application fee is paid, study materials will be sent to your email and dashboard.",
//       icon: <Book className="h-5 w-5 text-[#0B0A0A]" />,
//       cta: {
//         label: "View Study Kit",
//         link: "/dashboard/study-kit",
//         primary: false,
//       },
//     },
//     {
//       number: 3,
//       title: "Take Fundamental Exam",
//       description:
//         "After reviewing the study kit, take the fundamental exam. Score ≥ 60% to proceed.",
//       icon: <FileText className="h-5 w-5 text-[#0B0A0A]" />,
//       cta: { label: "Start Exam", link: "/dashboard/exam", primary: false },
//     },
//     {
//       number: 4,
//       title: "Pay School Fees",
//       description:
//         "Pass the exam? Congratulations! Proceed to pay your school fees to start your 1-year diploma.",
//       icon: <Banknote className="h-5 w-5 text-green-600" />,
//       cta: { label: "Pay School Fees", link: "#", primary: true },
//     },
//   ];

//   return (
//     <div className="space-y-8 p-6">
//       <h1 className="text-3xl font-bold text-[#0B0A0A]">
//         How to Apply: Cloud Engineering Program
//       </h1>
//       <p className="text-gray-600">
//         Follow these steps to complete your application successfully.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {steps.map((step) => (
//           <Card key={step.number} className="border border-gray-200">
//             <CardHeader className="flex items-center gap-3">
//               <span className="text-white bg-[#E61A1A] w-8 h-8 flex items-center justify-center rounded-full font-semibold">
//                 {step.number}
//               </span>
//               {step.icon}
//               <CardTitle>{step.title}</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <CardDescription>{step.description}</CardDescription>
//               {step.cta && (
//                 <Button
//                   asChild
//                   className={step.cta.primary ? "bg-[#E61A1A] text-white" : ""}
//                   variant={step.cta.primary ? undefined : "outline"}
//                 >
//                   <a href={step.cta.link}>{step.cta.label}</a>
//                 </Button>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
