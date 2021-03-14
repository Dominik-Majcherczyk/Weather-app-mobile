import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ControlPanel = () => {
  return (
    <View style={styles.container}>
      <TextInput></TextInput>
    </View>
  );
};

export default ControlPanel;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
  },
});
