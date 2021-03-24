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

const InfoPanelRoute = () => <InfoPanel />;

const SearchingRoute = () => <Searching />;

const FavouritesRoute = () => <Favourites />;
export default function App() {
  const [index, setIndex] = React.useState(0);
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
      <ImageBackground
        source={{
          uri:
            "https://i.pinimg.com/originals/6e/c7/69/6ec76953bc587432d7aa9201f48a7ca9.jpg",
        }}
        style={{ width: "100%", opacity: 0.99, resizeMode: "cover" }}
      >
        <Appbar.Header style={{ backgroundColor: "transparent" }}>
          <Appbar.Content
            title="WeatherApp"
            subtitle="forecast"
            color="white"
          />
          {/* logo */}
          <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri:
                "http://lh3.googleusercontent.com/napgxTBO7Efx-5NrdG_Mrfh6tISWc7Q1V6mXhQl-yDMOCPQIeioaTnUG5-zAjnFP-_o=w300",
            }}
          />
        </Appbar.Header>
      </ImageBackground>
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
