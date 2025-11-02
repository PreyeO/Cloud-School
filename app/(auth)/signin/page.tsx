import SigninForm from "@/components/authentication/forms/SigninForm";
import AuthLayout from "@/components/authentication/shared/AuthLayout";

const SigninPage = () => {
  return (
    <AuthLayout
      showTabs={true}
      imageSrc="/signin.png"
      imageAlt="Sign In Image"
      className="h-[500px]"
    >
      <SigninForm />
    </AuthLayout>
  );
};
export default SigninPage;
