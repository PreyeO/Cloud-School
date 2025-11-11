import ForgotPasswordForm from "@/components/authentication/forms/ForgotPasswordForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const ForgotPasswordPage = () => {
  return (
    <AuthLayout showTabs={false} className="h-[500px]">
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
