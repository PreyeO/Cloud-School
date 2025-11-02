"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, usePathname } from "next/navigation";

export default function AuthTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const isSignup = pathname.includes("signup");

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[588px]">
        <Tabs
          value={isSignup ? "signup" : "signin"}
          onValueChange={(val) => router.push(`/${val}`)}
        >
          <TabsList className="w-full h-[64px] rounded-full overflow-hidden">
            <TabsTrigger value="signup" className="">
              Sign Up
            </TabsTrigger>
            <TabsTrigger value="signin" className="">
              Sign In
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
