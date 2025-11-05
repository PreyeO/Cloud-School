"use client";
import VerifyOtpForm from "@/components/authentication/forms/VerifyOtpForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const VerifyOtpPage = () => {
  return (
    <AuthLayout
      showTabs={false}
      imageSrc="/signin.png"
      imageAlt="Sign In Image"
      className="h-[500px]"
    >
      <VerifyOtpForm />
    </AuthLayout>
  );
};

export default VerifyOtpPage;
