import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ControlPanel = () => {
  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onEndEditing={onEndEditingHandler}
      ></TextInput>
    </View>
  );
};

export default ControlPanel;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#333333",
    color: "#fff",
  },
});
