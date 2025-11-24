"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import { RedirectScreen } from "../layout/RedirectScreen";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isHydrated, isTokenExpired, clearAuth } = useAuthStore();

  useEffect(() => {
    if (!isHydrated) return;

    // If user is not logged in or token expired
    if (!user || isTokenExpired()) {
      clearAuth();
      router.push("/signin");
      return;
    }

    // Restrict routes based on roles
    const isAdminRoute = pathname.startsWith("/admin");
    const isStudentRoute = pathname.startsWith("/student");

    // Only "student" can access /student
    if (isStudentRoute && user.role !== "student") {
      router.push("/admin");
      return;
    }

    // Only "admin" and "super_admin" can access /admin
    if (isAdminRoute && !["admin", "super_admin"].includes(user.role)) {
      router.push("/student");
      return;
    }
  }, [isHydrated, user, pathname, router, clearAuth, isTokenExpired]);

  if (!isHydrated || !user) {
    return <RedirectScreen />;
  }

  return <>{children}</>;
}
