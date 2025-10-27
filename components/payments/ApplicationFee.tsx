"use client";

import React from "react";
import { Button } from "../ui/button";
import { usePayApplicationFee } from "@/hooks/usePayApplicationFee";

const ApplicationFee = () => {
  const { mutate: handlePay, isPending } = usePayApplicationFee();

  return (
    <div className="w-full lg:w-[380px] bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl p-10 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
          Application Fee
        </p>
        <h3 className="text-5xl font-extrabold text-[#E51919] mb-4">₦20,000</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          Secure your slot in the Cloud Engineering program by completing your
          application payment today.
        </p>
      </div>

      <Button
        onClick={() => handlePay()}
        disabled={isPending}
        className="mt-8 w-full bg-[#E51919] hover:bg-[#c91414] text-white rounded-2xl font-semibold text-lg py-6 transition-all duration-300 shadow-md"
      >
        {isPending ? "Processing..." : "Pay Now"}
      </Button>
    </div>
  );
};

export default ApplicationFee;
