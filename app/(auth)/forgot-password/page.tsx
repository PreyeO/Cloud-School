import ForgotPasswordForm from "@/components/authentication/forms/ForgotPasswordForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const ForgotPasswordPage = () => {
  return (
    <AuthLayout
      showTabs={false}
      className="flex flex-col items-center justify-center"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
