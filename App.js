import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Weather from "./components/Weather";
import LocalizationButton from "./components/LocalizationButton";
import styles from "./styles/app.js";

const STORAGE_KEY = "@weatherApp:key";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>{todo !== "" ? `${todo}` : "there is no todo"}</Text>
      <StatusBar style="auto" />

      <TextInput
        style={styles.input}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#333333",
    color: "#fff",
  },
});
