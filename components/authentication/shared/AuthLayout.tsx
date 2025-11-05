import AuthTabs from "@/components/authentication/shared/AuthTabs";
import Images from "@/components/ui/images";

interface AuthLayoutProps {
  children: React.ReactNode;
  showTabs?: boolean; // optional, defaults to true
  imageSrc: string; // optional, to change the side image
  imageAlt: string; // optional, alt text
  className?: string;
  //   width: number;
  //   height: number;
}

export default function AuthLayout({
  children,
  showTabs = true,
  imageSrc = "/signup.png", // default image
  imageAlt = "Auth image",
  className = "",
}: //   width = 572,
//   height = 728,

AuthLayoutProps) {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white py-[70px] px-[20px]  gap-[20px]">
      <div className="hidden lg:flex items-center justify-center">
        <Images
          src={imageSrc}
          alt={imageAlt}
          width={572}
          height={728}
          className={className}
        />
      </div>

      <div className="flex flex-col items-center w-full justify-center">
        {showTabs && <AuthTabs />}
        <div className="w-full max-w-[588px] mt-6">{children}</div>
      </div>
    </main>
  );
}
