import ResetPasswordForm from "@/components/authentication/forms/ResetPasswordForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const ResetPasswordPage = () => {
  return (
    <AuthLayout
      showTabs={false}
      className="flex flex-col items-center justify-center"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
