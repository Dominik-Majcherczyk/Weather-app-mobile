import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  FlatList,
} from "react-native";
import { FAB } from "react-native-paper";
import dayImg from "../../img/day.png";
import nightImg from "../../img/night.png";
import { useDispatch, useSelector } from "react-redux";
const Weather = () => {
  const cityWeatherInfo = useSelector((state) => state.cityWeatherInfo);
  const cityName = useSelector((state) => state.cityName);

  const setImage = (isDayTime) => {
    if (isDayTime == true) {
      return dayImg;
    } else {
      return nightImg;
    }
  };
  console.log(
    "XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"
  );
  console.log(cityName);
  console.log(cityWeatherInfo);
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
        <Text style={styles.text}>{cityName.cityName}</Text>
        <Text style={styles.text}>{cityWeatherInfo.isDayTime}</Text>
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
