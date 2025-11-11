import ResetPasswordForm from "@/components/authentication/forms/ResetPasswordForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const ResetPasswordPage = () => {
  return (
    <AuthLayout showTabs={false} className="h-[500px]">
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
