import { View } from "react-native";
import { Marker } from "react-native-maps";
import { Map } from "@/components/Map";
import { MARKER_COORDINATES } from "@/constants/coordinates";

export default function Index() {
  return (
    <View>
      <Map>
        {MARKER_COORDINATES.map((item, key) => {
          return <Marker coordinate={item} key={key} />;
        })}
      </Map>
    </View>
  );
}
