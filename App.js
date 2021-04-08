import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Appbar } from "react-native-paper";
import { BottomNavigation, Text } from "react-native-paper";
import logo from "./img/logo.png";
import InfoPanel from "./components/infoPanel/InfoPanel";
import Searching from "./components/Searching";
import Favourites from "./components/Favourites";
import AppHeader from "./components/AppHeader";

const InfoPanelRoute = () => <InfoPanel />;

export default function App() {
  const [index, setIndex] = React.useState(0);
  const SearchingRoute = () => <Searching setIndex={setIndex} />;
  const FavouritesRoute = () => <Favourites setIndex={setIndex} />;
  const [routes] = React.useState([
    {
      key: "InfoPanel",
      title: "Weather",
      icon: "weather-snowy-rainy",
      color: "#da5139",
    },
    {
      key: "Searching",
      title: "Search",
      icon: "cloud-search-outline",
      color: "#3179e6",
    },
    {
      key: "Favourites",
      title: "Favourites",
      icon: "heart-outline",
      color: "#e03b6d",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    InfoPanel: InfoPanelRoute,
    Searching: SearchingRoute,
    Favourites: FavouritesRoute,
  });
  return (
    <View style={mainStyles.container}>
      <AppHeader />
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        shifting={true}
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
