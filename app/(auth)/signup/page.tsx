import SignupForm from "@/components/authentication/forms/SignupForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const SignupPage = () => {
  return (
    <AuthLayout showTabs={true}>
      <SignupForm />
    </AuthLayout>
  );
};
export default SignupPage;
