import React from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";

export function MapsView() {
  return (
    <ThemedView style={styles.container}>
      <MapView style={styles.map} />
    </ThemedView>
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
