// --- Redirect Screen ---
"use client";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
export const RedirectScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          className="rounded-full p-3 bg-gray-100 dark:bg-gray-800 shadow-sm"
        >
          <Loader2 size={28} className="text-gray-700 dark:text-gray-200" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium tracking-wide"
        >
          Hold on, we’re redirecting you...
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="h-[2px] w-32 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full origin-left"
        />
      </motion.div>
    </div>
  );
};
