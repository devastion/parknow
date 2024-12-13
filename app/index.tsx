import { View } from "react-native";
import { Marker } from "react-native-maps";
import { Map } from "@/components/Map";

export default function Index() {
  return (
    <View>
      <Map>
        <Marker
          coordinate={{
            latitude: 42.69796785238605,
            longitude: 23.320808744181843,
          }}
        />
      </Map>
    </View>
  );
}
