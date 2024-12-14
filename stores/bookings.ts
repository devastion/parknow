import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useBookingsStore = create<any>()(
  persist(
    (set) => ({
      bookings: [],
      addBooking: (booking: any) =>
        set((state: any) => ({ bookings: [...state.bookings, booking] })),
      removeBooking: (booking: any) =>
        set((state: any) => ({
          bookings: state.bookings.filter((st: any) => st.id !== booking.id),
        })),
    }),
    {
      name: "bookings-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
