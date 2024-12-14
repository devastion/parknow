import React from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { useAuthStore } from "@/stores/auth";

const hardcodedUsers = [
  { username: "user1", password: "1234" },
  { username: "user2", password: "4321" },
];

export function Login() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const state = useAuthStore();

  const handleSubmit = () => {
    const user = hardcodedUsers.find(
      (u) => u.username === text.toLowerCase() && u.password === number,
    );
    if (user) {
      state.addUser(user);
    }
  };

  return (
    <View className="py-20 gap-4 flex justify-center flex-col items-center">
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
