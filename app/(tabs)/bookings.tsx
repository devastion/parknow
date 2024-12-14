import { View, Text } from "react-native";
import { useBookingsStore } from "@/stores/bookings";

export default function Index() {
  const bookings = useBookingsStore((state) => state.bookings);
  return (
    <View className="py-20 gap-4 flex justify-center flex-col items-center">
      <View>
        <Text className="font-bold text-3xl">My Bookings</Text>
      </View>
      {bookings.map((booking: any) => {
        return (
          <Text className="font-medium text-xl" key={booking.id}>
            {booking.title}
          </Text>
        );
      })}
    </View>
  );
}
