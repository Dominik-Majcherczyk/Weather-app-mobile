import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { findCity } from "../reducers/city";
import { Appbar } from "react-native-paper";

const Searching = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const citiesData = useSelector((state) => state.citiesData);

  console.log(input);
  useEffect(() => {
    dispatch(findCity(input));
  }, [input]);

  console.log(citiesData.cities[0]);
  return (
    <View style={styles.container}>
      <Text>Find City:</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
        // onEndEditing={() => cityInputHandler()}
      ></TextInput>
    </View>
  );
};

export default Searching;

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
