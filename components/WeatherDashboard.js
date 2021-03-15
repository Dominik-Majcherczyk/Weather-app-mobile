import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
const WeatherDashboard = () => {
  const image = {
    uri: "https://ak.picdn.net/shutterstock/videos/26398718/thumb/1.jpg",
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text></Text>
      </ImageBackground>
    </View>
  );
};

export default WeatherDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "column",
  },
  image: {
    borderRadius: 25,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
