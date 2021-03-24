import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import dayImg from "../../img/day.png";
import nightImg from "../../img/night.png";
const Weather = () => {
  return (
    <View style={styles.scene}>
      <ImageBackground source={dayImg} style={styles.image}>
        <Text style={styles.text}>cityName</Text>
        <Text style={styles.text}>cityWeather</Text>
      </ImageBackground>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: "#8CE578",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
});
