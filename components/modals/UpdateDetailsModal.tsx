"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UpdateDetailsForm from "../authentication/forms/UpdateDetailsForm";
import { useAuthStore } from "@/store/useAuthStore";

const UpdateDetailsModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, isHydrated } = useAuthStore();

  useEffect(() => {
    if (!isHydrated) return;
    if (!user) return;

    // ✅ Unique key per user
    const storageKey = `detailsModalClosed_${user._id}`;

    const hasCompletedDetails =
      !!user.gender &&
      !!user.employmentStatus &&
      !!user.academyLevel &&
      !!user.dateOfBirth &&
      !!user.countryOfResidence &&
      !!user.stateOfResidence;

    const hasSeenModal = localStorage.getItem(storageKey);

    if (!hasCompletedDetails && !hasSeenModal) {
      const timer = setTimeout(() => setShowModal(true), 5000); // show after 5s
      return () => clearTimeout(timer);
    }

    setShowModal(false);
  }, [user, isHydrated]);

  const handleClose = () => {
    if (user) {
      const storageKey = `detailsModalClosed_${user._id}`;
      localStorage.setItem(storageKey, "true");
    }
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-lg relative max-h-[90vh] overflow-auto"
          >
            <h2 className="text-2xl font-semibold mb-3 text-center text-[#E51919]">
              Complete Your Profile
            </h2>
            <p className="text-gray-500 text-center mb-6">
              We’d love to know you better. Please fill in your details below.
            </p>

            <UpdateDetailsForm onSuccessClose={handleClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UpdateDetailsModal;
