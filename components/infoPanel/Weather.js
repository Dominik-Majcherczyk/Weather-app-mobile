import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { FAB } from "react-native-paper";
import dayImg from "../../img/day.png";
import nightImg from "../../img/night.png";
const Weather = () => {
  return (
    <View style={styles.scene}>
      <ImageBackground source={dayImg} style={styles.image}>
        <Text style={styles.text}>cityName</Text>
        <Text style={styles.text}>cityWeather</Text>
      </ImageBackground>
      <FAB
        style={styles.fab}
        small={false}
        icon="heart"
        onPress={() => console.log("Pressed")}
        type="string"
      />
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
  fab: {
    position: "absolute",
    marginBottom: 50,
    marginRight: 50,
    right: 0,
    bottom: 0,
    backgroundColor: "#e64570",
  },
});
