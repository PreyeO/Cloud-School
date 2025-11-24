import SignupForm from "@/components/authentication/forms/SignupForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const SignupPage = () => {
  return (
    <AuthLayout
      showTabs={true}
      className="flex flex-col items-center justify-center"
    >
      <SignupForm />
    </AuthLayout>
  );
};
export default SignupPage;
