import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { BottomNavigation, Text } from "react-native-paper";

import InfoPanel from "./components/infoPanel/InfoPanel";
import Searching from "./components/Searching";
import WeatherDashboard from "./components/WeatherDashboard";
const InfoPanelRoute = () => <InfoPanel />;

const SearchingRoute = () => <Searching />;

const FavouritesRoute = () => <Text>FavouritesRoute</Text>;
export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "InfoPanel", title: "Weather", icon: "queue-music" },
    { key: "Searching", title: "Search", icon: "album" },
    { key: "Favourites", title: "Favourites", icon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    InfoPanel: InfoPanelRoute,
    Searching: SearchingRoute,
    Favourites: FavouritesRoute,
  });
  return (
    <View style={mainStyles.container}>
      <Appbar.Header>
        <Appbar.Content title="Title" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </View>
  );
}

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
