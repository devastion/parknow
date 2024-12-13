import React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

interface MapProps {
  children: any;
}

export function Map({ children }: MapProps) {
  return (
    <MapView
      initialRegion={{
        latitude: 42.694012,
        longitude: 23.3135,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      }}
      style={styles.map}
    >
      {children}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
