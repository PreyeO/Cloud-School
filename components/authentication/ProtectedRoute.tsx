"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, isHydrated, isTokenExpired, clearAuth } = useAuthStore();

  // 🧠 First effect — handles initial redirect if not logged in or token expired
  useEffect(() => {
    if (!isHydrated) return; // wait for hydration first

    if (!user || isTokenExpired()) {
      clearAuth();
      router.push("/auth/signin");
    }
  }, [isHydrated, user, router, isTokenExpired, clearAuth]);

  // 🕒 Second effect — sets auto logout timer when token will expire
  useEffect(() => {
    if (!isHydrated || !user) return;

    const tokens = useAuthStore.getState().tokens;
    if (!tokens) return;

    // Decode token to get expiry time
    const [, payloadBase64] = tokens.accessToken.split(".");
    const payload = JSON.parse(atob(payloadBase64));
    const exp = payload.exp * 1000;
    const timeout = exp - Date.now();

    if (timeout > 0) {
      const timer = setTimeout(() => {
        clearAuth();
        router.push("/auth/signin");
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [isHydrated, user, clearAuth, router]);

  // Show loader while hydrating
  if (!isHydrated) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Loading...
      </div>
    );
  }

  // Show redirecting message while checking auth
  if (!user || isTokenExpired()) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        Redirecting...
      </div>
    );
  }

  return <>{children}</>;
}
