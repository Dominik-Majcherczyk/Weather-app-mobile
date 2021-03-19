import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { findCityWeatherInfo } from "../reducers/weather";
import dayImg from "../img/day.png";
import nightImg from "../img/night.png";

const WeatherDashboard = () => {
  const dispatch = useDispatch();
  const defaultImage = {
    uri: "https://ak.picdn.net/shutterstock/videos/26398718/thumb/1.jpg",
  };
  const cityData = useSelector((state) => state.cityData);
  const cityWeather = useSelector((state) => state.cityWeatherInfo);

  //toast error message
  const showErrorMessage = () => {
    ToastAndroid.showWithGravityAndOffset(
      "The city was not found. Try again",
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      110
    );
  };
  cityData.error ? showErrorMessage() : "";
  useEffect(() => {
    dispatch(findCityWeatherInfo(cityData.cityId));
  }, [cityData.cityId]);
  // data logs
  console.log(cityWeather);
  console.log(cityData);
  //

  return (
    <View style={styles.container}>
      <ImageBackground
        source={cityWeather.isDayTime == true ? dayImg : nightImg}
        style={styles.image}
      >
        <Text style={styles.text}>{cityData.cityName}</Text>
        <Text style={styles.text}>{cityWeather.localObservationDateTime}</Text>
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
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
