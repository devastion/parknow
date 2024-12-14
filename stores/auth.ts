import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useAuthStore = create<any>()(
  persist(
    (set) => ({
      user: null,
      addUser: (user: any) => set((state: any) => ({ user: user })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
