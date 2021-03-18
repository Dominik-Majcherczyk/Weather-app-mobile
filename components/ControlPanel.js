import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { findCity } from "../reducers/city";

const ControlPanel = () => {
  const [input, setInput] = useState();

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
        onEndEditing={() => dispatch(findCity(input))}
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
