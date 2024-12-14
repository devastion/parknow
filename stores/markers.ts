import { Marker, MARKER_DATA } from "@/constants/marker-data";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface MarkersState {
  markers: Marker[];
  deleteMarker: (marker: Marker) => void;
}
export const useMarkersStore = create<MarkersState>()(
  persist(
    (set) => ({
      markers: MARKER_DATA,
      deleteMarker: (marker) =>
        set((state: any) => ({
          markers: state.markers.filter(
            (m: (typeof MARKER_DATA)[number]) => m.id !== marker.id,
          ),
        })),
    }),
    {
      name: "markers-storage",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
