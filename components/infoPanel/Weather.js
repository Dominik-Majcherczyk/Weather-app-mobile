import React from "react";
import { View, StyleSheet, ImageBackground, Text, Image } from "react-native";
import { FAB } from "react-native-paper";
import dayImg from "../../img/dayImg.png";
import nightImg from "../../img/nightImg.png";
import icons from "./climacons.js";
import { useSelector } from "react-redux";

//local storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const Weather = () => {
  const cityWeatherInfo = useSelector((state) => state.cityWeatherInfo);
  const cityName = useSelector((state) => state.cityName);

  let iconSource = icons[cityWeatherInfo.weatherIcon - 1];
  const setImage = (isDayTime) => {
    if (isDayTime == true) {
      return dayImg;
    } else {
      return nightImg;
    }
  };

  //adding fav zone
  const addFavourite = () => {
    storeData(cityName);
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(`${cityName.cityName}`, JSON.stringify(value));
    } catch (e) {
      console.log("error while saving fav zone");
    }
  };

  return (
    <View style={styles.scene}>
      <ImageBackground
        source={
          cityWeatherInfo.isDayTime == null
            ? dayImg
            : setImage(cityWeatherInfo.isDayTime)
        }
        style={styles.image}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.bigText}>{cityName.cityName}</Text>
          <Text style={styles.smallText}>
            {cityWeatherInfo.temperature &&
              `temperature: ${cityWeatherInfo.temperature.Metric.Value} ${cityWeatherInfo.temperature.Metric.Unit}`}
          </Text>

          {cityWeatherInfo.weatherIcon && (
            <View style={styles.weatherBoxBackground}>
              <Text style={styles.smallText}>
                {cityWeatherInfo.weatherText}
              </Text>
              {cityWeatherInfo.isDayTime ? (
                <View style={styles.iconBackgroundDay}>
                  <Image style={styles.tinyLogo} source={iconSource} />
                </View>
              ) : (
                <View style={styles.iconBackgroundNight}>
                  <Image style={styles.tinyLogo} source={iconSource} />
                </View>
              )}
            </View>
          )}
        </View>

        {cityWeatherInfo.weatherIcon && (
          <FAB
            style={styles.fab}
            small={false}
            icon="heart"
            onPress={() => {
              addFavourite();
            }}
            type="string"
          />
        )}
      </ImageBackground>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },

  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackgroundNight: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(44, 44, 44, 0.685)",
    marginTop: 15,
  },
  iconBackgroundDay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(252, 252, 252, 0.733)",
    marginTop: 15,
  },
  weatherBoxBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 180,
    marginTop: 25,
    backgroundColor: "rgba(236, 236, 236, 0.164)",
    borderRadius: 25,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  smallText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  bigText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 35,
  },
  fab: {
    position: "absolute",
    marginBottom: 20,
    marginRight: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#e64570",
  },
});
