import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
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

  return (
    <View style={styles.scene}>
      {forecast !== null ? (
        forecast.DailyForecasts.map((day) => {
          return (
            <View key={day.Date}>
              <Text>{day.Date.slice(0, 10)}</Text>
              <Text>
                {Math.round((day.Temperature.Maximum.Value - 32) / 1.8)}
              </Text>
            </View>
          );
        })
      ) : (
        <Text>not xd</Text>
      )}
    </View>
  );
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
