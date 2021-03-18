import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { useSelector } from "react-redux";

const WeatherDashboard = () => {
  const image = {
    uri: "https://ak.picdn.net/shutterstock/videos/26398718/thumb/1.jpg",
  };
  const cityData = useSelector((state) => state.cityData);

  const showToast = () => {
    ToastAndroid.show(
      "The city was not found. Try again",
      ToastAndroid.LONG,
      ToastAndroid.TOP
    );
  };

  console.log(cityData);
  cityData.error ? showToast() : "";
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>{cityData.cityName}</Text>
        <Text style={styles.text}>{cityData.cityId}</Text>
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
  text: {
    color: "#fff",
  },
});
