import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SignupResponse, SigninResponse } from "@/types/auth";

type User = SignupResponse["data"]["user"] | SigninResponse["data"]["user"];
type Tokens = SignupResponse["data"]["tokens"];

interface AuthState {
  user: User | null;
  tokens: Tokens | null;
  isHydrated: boolean;
  setAuth: (data: { user: User; tokens: Tokens }) => void;
  clearAuth: () => void;
  setHydrated: (state: boolean) => void;
  isTokenExpired: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      tokens: null,
      isHydrated: false,

      setAuth: (data) => set({ user: data.user, tokens: data.tokens }),
      clearAuth: () => set({ user: null, tokens: null }),
      setHydrated: (state) => set({ isHydrated: state }),

      // ✅ Token expiration logic
      isTokenExpired: () => {
        const tokens = get().tokens;
        if (!tokens) return true;

        // Decode JWT to check expiry
        try {
          const [, payloadBase64] = tokens.accessToken.split(".");
          const payload = JSON.parse(atob(payloadBase64));
          const exp = payload.exp * 1000; // convert to ms
          return Date.now() >= exp;
        } catch (error) {
          console.error("Failed to decode token:", error);
          return true;
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        tokens: state.tokens,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
