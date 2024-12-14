import React from "react";
import { View, Text, Alert, StyleSheet, Modal, Pressable } from "react-native";
import { Marker } from "react-native-maps";
import { Map } from "@/components/Map";
import { useMarkersStore } from "@/stores/markers";
import { useBookingsStore } from "@/stores/bookings";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import type { Marker as MarkerType } from "@/constants/marker-data";

export default function Index() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [marker, setMarker] = React.useState<MarkerType | null>(null);
  const markersStore = useMarkersStore((state) => state);
  const bookingStore = useBookingsStore((state) => state);
  const bookMarker = (marker: any) => {
    console.log(marker);
    bookingStore.addBooking(marker);
    markersStore.deleteMarker(marker);
  };
  const openModal = (item: any) => {
    setModalVisible((prev) => !prev);
    setMarker(item);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            setMarker(null);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{marker ? marker.title : ""}</Text>
              <Text style={styles.modalText}>
                {marker ? marker.description : ""}
              </Text>
              <Text style={styles.modalText}>
                price: ${marker ? marker.price : ""}
              </Text>
              <Text style={styles.modalText}>
                host: {marker ? marker.username : ""}
              </Text>
              <Pressable
                style={[styles.button, styles.buttonBook]}
                onPress={() => {
                  bookMarker(marker);
                  setModalVisible(!modalVisible);
                  setMarker(null);
                }}
              >
                <Text style={styles.textStyle}>Book Parking Slot</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setMarker(null);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Map>
          {markersStore.markers.map((item: any, key: number) => {
            return (
              <Marker
                title={item.title}
                description={`$${item.price} ${item.description}`}
                coordinate={item}
                key={key}
                onCalloutPress={() => openModal(item)}
              />
            );
          })}
        </Map>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginTop: 10,
  },
  buttonBook: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
