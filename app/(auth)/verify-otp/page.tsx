import { Suspense } from "react";
import VerifyOtpForm from "@/components/authentication/forms/VerifyOtpForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

export const dynamic = "force-dynamic"; // optional safety line

const VerifyOtpPage = () => {
  return (
    <AuthLayout showTabs={false} className="h-[500px]">
      <Suspense fallback={<div>Loading verification form...</div>}>
        <VerifyOtpForm />
      </Suspense>
    </AuthLayout>
  );
};

export default VerifyOtpPage;
