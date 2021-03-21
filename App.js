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
