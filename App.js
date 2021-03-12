import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function App() {
  const [value, onChangeText] = useState("Useless Placeholder");
  const [city, setCity] = useState("");
  function getCity(value) {
    fetch(
      "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=lxxucFd3EEaDSpxcFbTVyROFKL3tWxsG&q=Brzeszcze"
    ).then(function (response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }
      // Examine the text in the response
      response.json().then(function (data) {
        console.log(data[0].LocalizedName);
        setCity(data[0].LocalizedName);
      });
    });
  }
  return (
    <View>
      <Text>wprowadz miaaasto</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        onSubmitEditing={() => getCity(value)}
      />
      <Text>{city}</Text>
    </View>
  );
}
