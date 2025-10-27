"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { usePaySchoolFees } from "@/hooks/usePaySchoolFees";
import { PaymentPlanType } from "@/types/payment";

interface SchoolFeesProps {
  planTitle: string;
  amount: string;
}

const SchoolFees: React.FC<SchoolFeesProps> = ({ planTitle }) => {
  const { mutate: handlePay, isPending } = usePaySchoolFees();

  const handlePayment = () => {
    let planType: PaymentPlanType;

    if (planTitle.includes("Early")) planType = PaymentPlanType.EARLY_BIRD;
    else if (planTitle.includes("Mid")) planType = PaymentPlanType.MID;
    else planType = PaymentPlanType.NORMAL;

    console.log("Selected planType:", planType);
    handlePay(planType);
  };

  return (
    <div className="space-y-3">
      <Button
        onClick={handlePayment}
        disabled={isPending}
        className="w-full bg-[#E51919] hover:bg-[#c91414] text-white rounded-xl font-medium py-5 transition-all duration-300 shadow-sm hover:shadow-md"
        size="lg"
      >
        {isPending
          ? `Processing ${planTitle}...`
          : `Proceed to Payment (${planTitle})`}
      </Button>
    </div>
  );
};

export default SchoolFees;
