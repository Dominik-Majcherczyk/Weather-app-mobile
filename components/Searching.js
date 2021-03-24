import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { findCity } from "../reducers/city";
import { Divider, Appbar, TextInput, HelperText } from "react-native-paper";

const Searching = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const citiesData = useSelector((state) => state.citiesData);

  const hasErrors = () => {
    return Array.from(input).includes(
      "@",
      "!",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "+"
    );
  };

  console.log(input);
  useEffect(() => {
    dispatch(findCity(input));
  }, [input]);

  console.log(citiesData.cities);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="type here to find city:"
        value={input}
        onChangeText={(text) => setInput(text)}
      ></TextInput>
      <HelperText type="error" visible={hasErrors()}>
        City can't contain special characters
      </HelperText>
      <ScrollView>
        {citiesData.cities != undefined ? (
          citiesData.cities.map((city) => {
            return (
              <View key={city.Key}>
                <View style={styles.searchItem}>
                  <Text>{city.LocalizedName}</Text>
                  <Text>{city.Country.LocalizedName}</Text>
                  <Text>Region: {city.AdministrativeArea.LocalizedName}</Text>
                </View>
                <Divider />
              </View>
            );
          })
        ) : (
          <Text>sad pepe</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Searching;

const styles = StyleSheet.create({
  appbar: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "red",
  },
  container: {
    flex: 2,
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#333333",
    color: "#fff",
  },
  searchItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
  searchItemContent: {},
});
