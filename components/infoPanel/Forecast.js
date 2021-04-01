import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
const Forecast = () => {
  const cityName = useSelector((state) => state.cityName);
  let cityKey = cityName.cityKey;
  const [forecast, setForecast] = useState(null);

  const fetchForecast = async (cityKey) => {
    await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=lxxucFd3EEaDSpxcFbTVyROFKL3tWxsG`
    )
      .then((res) => res.json())
      .then((data) => setForecast(data))
      .catch(() => console.log("error in fetching forecast"));
  };

  useEffect(() => {
    fetchForecast(cityKey);
  }, [cityKey]);
  console.log("FOOOOOOOOOOREEEEEEEEEEECAAAAAAAAAAAAAAASTTTTTTTTTTTTTTT");
  console.log(forecast);
  return <View style={styles.scene}></View>;
};

export default Forecast;

const styles = StyleSheet.create({
  container: {},
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#673ab7",
  },
});
