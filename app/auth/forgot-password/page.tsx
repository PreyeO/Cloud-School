import ForgotPasswordForm from "@/components/authentication/forms/ForgotPasswordForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const ForgotPasswordPage = () => {
  return (
    <AuthLayout
      showTabs={false}
      imageSrc="/signin.png"
      imageAlt="Sign In Image"
      className="h-[500px]"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
