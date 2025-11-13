"use client";

import React from "react";
import { usePaySchoolFees } from "@/hooks/usePaySchoolFees";
import { PaymentPlanType } from "@/types/payment";
import PaymentButton from "../ui/btns/payment-button";

interface SchoolFeesProps {
  planTitle: string;
  amount: string;
}

const SchoolFees: React.FC<SchoolFeesProps> = ({ planTitle }) => {
  const { mutate: handlePay, isPending } = usePaySchoolFees();

  const handlePayment = () => {
    let planType: PaymentPlanType;

    if (planTitle.includes("Legacy")) planType = PaymentPlanType.EARLY_BIRD;
    else if (planTitle.includes("Prime")) planType = PaymentPlanType.MID;
    else planType = PaymentPlanType.NORMAL;
    handlePay(planType);
  };

  return (
    <div className="space-y-3">
      <PaymentButton
        label={`Activate ${planTitle}`}
        loadingLabel={`Processing ${planTitle}...`}
        isPending={isPending}
        onClick={handlePayment}
        className="w-full lg:py-4"
      />
    </div>
  );
};

export default SchoolFees;
