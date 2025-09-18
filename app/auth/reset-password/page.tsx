import ResetPasswordForm from "@/components/authentication/forms/ResetPasswordForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const ResetPasswordPage = () => {
  return (
    <AuthLayout
      showTabs={false}
      imageSrc="/signin.png"
      imageAlt="Sign In Image"
      className="h-[500px]"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
