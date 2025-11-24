import SigninForm from "@/components/authentication/forms/SigninForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const SigninPage = () => {
  return (
    <AuthLayout
      showTabs={true}
      className="flex flex-col items-center justify-center"
    >
      <SigninForm />
    </AuthLayout>
  );
};
export default SigninPage;
