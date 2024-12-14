import { View, Text, FlatList, Button } from "react-native";
import { useBookingsStore } from "@/stores/bookings";
import { useMarkersStore } from "@/stores/markers";

export default function Index() {
  const bookingStore = useBookingsStore((state) => state);
  const markerStore = useMarkersStore((state) => state);
  return (
    <View className="py-20 gap-4 flex justify-center flex-col items-center">
      <View>
        <Text className="font-bold text-3xl">My Bookings</Text>
      </View>
      <FlatList
        data={bookingStore.bookings}
        renderItem={({ item }) => (
          <View>
            <Text className="font-medium text-xl">{item.title}</Text>
            <Button
              onPress={() => {
                markerStore.addMarker(item);
                bookingStore.removeBooking(item);
              }}
              title="cancel"
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
