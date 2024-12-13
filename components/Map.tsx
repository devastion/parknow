import React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

interface MapProps {
  children: React.ReactNode;
}

export function Map({ children }: MapProps) {
  return <MapView style={styles.map}>{children}</MapView>;
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
