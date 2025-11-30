"use client";

import { Button } from "@/components/ui/button";
import { clearDb } from "@/lib/api/auth";
import { notify } from "@/lib/notify";
import { useState } from "react";
import { AxiosError } from "axios";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleClearDb = async () => {
    try {
      setLoading(true);
      const res = await clearDb();

      if (res.success) {
        notify.success(res.message || "Database cleared successfully");
      } else {
        notify.error("Something went wrong while clearing the database");
      }
    } catch (error: unknown) {
      // ✅ type-safe Axios error handling
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message || "Failed to clear DB";
        notify.error(message);
      } else {
        notify.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold text-red-500">CLOUD TOP G</h1>
      <Button
        onClick={handleClearDb}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 text-white"
      >
        {loading ? "Clearing..." : "Clear DB"}
      </Button>
    </div>
  );
}
