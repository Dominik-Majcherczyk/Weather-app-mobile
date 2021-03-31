import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  FlatList,
  Image,
} from "react-native";
import { FAB } from "react-native-paper";
import dayImg from "../../img/dayImg.png";
import nightImg from "../../img/nightImg.png";
import ico from "../../img/icons/Cloud-Fog.png";
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
  let iconSource = ico;
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
        <View style={styles.infoContainer}>
          <Text style={styles.bigText}>{cityName.cityName}</Text>
          <Text style={styles.smallText}>
            {cityWeatherInfo.temperature &&
              `temperature: ${cityWeatherInfo.temperature.Metric.Value} ${cityWeatherInfo.temperature.Metric.Unit}`}
          </Text>

          <View style={styles.iconBackground}>
            <FAB
              style={styles.icoFab}
              small={false}
              icon={iconSource}
              type="string"
            />
            <Text style={styles.textDark}>{cityWeatherInfo.weatherText}</Text>
            <Image style={styles.tinyLogo} source={iconSource} />
            <FAB
              style={styles.fab}
              small={false}
              icon="heart"
              onPress={() => console.log("Pressed")}
              type="string"
            />
          </View>
        </View>
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
    width: 60,
    height: 60,
  },
  icoFab: {
    position: "absolute",
    top: 0,
    marginTop: -25,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackground: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 280,
    height: 350,
    marginTop: 25,
    backgroundColor: "rgba(236, 236, 236, 0.55)",
    borderRadius: 20,
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
    marginBottom: -15,
    marginRight: -15,
    right: 0,
    bottom: 0,
    backgroundColor: "#e64570",
  },
});
