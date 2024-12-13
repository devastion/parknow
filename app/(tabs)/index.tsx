import { View, Text, ScrollView } from "react-native";

const ParkingSlotCard = () => {
  return (
    <View className="w-4/5 bg-blue-500 flex flex-col gap-3 rounded-md py-4 px-4">
      <Text className="text-gray-200 font-medium">Parking slot in 500m</Text>
      <Text className="text-gray-200">Garage, 120BGN</Text>
    </View>
  );
};

export default function Home() {
  return (
    <ScrollView contentContainerClassName="py-20 flex flex-col items-center gap-2 justify-center">
      <Text className="text-xl font-bold py-4 text-blue-500">
        Hello, Brion Bishop!
      </Text>

      <ParkingSlotCard />
    </ScrollView>
  );
}
