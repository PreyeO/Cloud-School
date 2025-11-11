"use client";

import React from "react";
import { Button } from "../ui/button";
import { usePayApplicationFee } from "@/hooks/usePayApplicationFee";

const ApplicationFee = () => {
  const { mutate: handlePay, isPending } = usePayApplicationFee();

  return (
    <div className="w-full max-w-full sm:max-w-md lg:w-[380px] bg-white text-[#595959] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <p className=" text-xs sm:text-sm font-medium mb-1">Application Fee</p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#E51919] mb-3 sm:mb-4">
          ₦20,000
        </h3>
        <p className=" text-sm sm:text-base leading-relaxed">
          Confirm your place in the Cloud Engineering program and join Africa’s
          fastest-growing community of future cloud leaders.
        </p>
      </div>

      <Button
        onClick={() => handlePay()}
        disabled={isPending}
        className="mt-6 sm:mt-8 w-full bg-[#E51919] hover:bg-[#c91414] text-white rounded-2xl font-semibold text-base sm:text-lg py-4 sm:py-5 md:py-6 transition-all duration-300 shadow-md"
      >
        {isPending ? "Processing..." : "Pay Now"}
      </Button>
    </div>
  );
};

export default ApplicationFee;
