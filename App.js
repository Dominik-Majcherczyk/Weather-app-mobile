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

const FavouritesRoute = () => <Favourites />;
export default function App() {
  const [index, setIndex] = React.useState(0);
  const SearchingRoute = () => <Searching setIndex={setIndex} />;
  const [routes] = React.useState([
    {
      key: "InfoPanel",
      title: "Weather",
      icon: "weather-snowy-rainy",
      color: "#3F51B5",
    },
    {
      key: "Searching",
      title: "Search",
      icon: "cloud-search-outline",
      color: "#795548",
    },
    {
      key: "Favourites",
      title: "Favourites",
      icon: "heart-outline",
      color: "#607D8B",
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
