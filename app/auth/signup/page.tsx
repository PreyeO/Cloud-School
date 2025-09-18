import SignupForm from "@/components/authentication/forms/SignupForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const SignupPage = () => {
  return (
    <AuthLayout showTabs={true} imageSrc="/signup.png" imageAlt="Sign Up Image">
      <SignupForm />
    </AuthLayout>
  );
};
export default SignupPage;
