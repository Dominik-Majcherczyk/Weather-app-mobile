import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import ControlPanel from "./components/ControlPanel";
import WeatherDashboard from "./components/WeatherDashboard";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  // function getCity(value) {
  //   fetch(
  //     "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=lxxucFd3EEaDSpxcFbTVyROFKL3tWxsG&q=Katowice"
  //   ).then(function (response) {
  //     if (response.status !== 200) {
  //       console.log(
  //         "Looks like there was a problem. Status Code: " + response.status
  //       );
  //       return;
  //     }
  //     // Examine the text in the response
  //     response.json().then(function (data) {
  //       console.log(data[0].LocalizedName);
  //       setCity(data[0].LocalizedName);
  //     });
  //   });
  // }

  return (
    <Provider store={store}>
      <View style={mainStyles.container}>
        <WeatherDashboard />
        <ControlPanel />
      </View>
    </Provider>
  );
}

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
