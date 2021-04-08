import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
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
    cityKey !== null && cityKey !== undefined && cityKey !== ""
      ? fetchForecast(cityKey)
      : null;
  }, [cityName]);

  console.log("Forecast log");

  return (
    <View style={styles.scene}>
      <ScrollView>
        {forecast !== undefined && forecast !== null ? (
          forecast.DailyForecasts.map((day) => {
            return (
              <View key={day.Date} style={styles.infoContainer}>
                <Text>{day.Date.slice(0, 10).replace("-", " ")}</Text>
                <View>
                  <Text>
                    {`Minimum: ${Math.round(
                      (day.Temperature.Minimum.Value - 32) / 1.8
                    )} C`}
                  </Text>
                  <Text>
                    {`Maximum: ${Math.round(
                      (day.Temperature.Maximum.Value - 32) / 1.8
                    )} C`}
                  </Text>
                </View>
                <View>
                  <Text>{`Day: ${day.Day.IconPhrase}`}</Text>
                  <Text>{`Night: ${day.Night.IconPhrase}`}</Text>
                </View>
              </View>
            );
          })
        ) : (
          <View style={styles.waiter}>
            <Text style={styles.bigText}>{cityName.cityName}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  infoContainer: {
    width: 300,
    height: 90,
    marginTop: 10,
    marginBottom: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",

    borderRadius: 25,
    backgroundColor: "rgba(197, 195, 195, 0.55)",
  },
  bigText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 35,
  },
  waiter: {},
  scene: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8233e9",
  },
});
