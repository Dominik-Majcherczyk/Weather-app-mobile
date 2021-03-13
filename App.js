import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function App() {
  const [value, onChangeText] = useState("Useless Placeholder");
  const [city, setCity] = useState("");
  function getCity(value) {
    fetch(
      "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=lxxucFd3EEaDSpxcFbTVyROFKL3tWxsG&q=Katowice"
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
  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  const renderItem = ({ item }) => <Item title={item.title} />;
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
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
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
