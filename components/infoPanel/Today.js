import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import dayIco from "../../img/icons/Sun.png";
import nightIco from "../../img/icons/Moon.png";

const Today = () => {
  const cityName = useSelector((state) => state.cityName);
  let cityKey = cityName.cityKey;
  const [forecast, setForecast] = useState(null);

  const fetchForecast = async (cityKey) => {
    await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=wfRGVnT6Q4hZtR749uYozqHKCe1FHKE3`
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
              <View key={day.Date} style={styles.container}>
                <Text style={styles.bigText}>
                  {day.Date.slice(0, 10).replace("-", " ")}
                </Text>
                <View style={styles.infoContainer}>
                  <View style={styles.container}>
                    <Text style={styles.smallText}>
                      {`Min.temp: ${Math.round(
                        (day.Temperature.Minimum.Value - 32) / 1.8
                      )} C`}
                    </Text>
                    <Text style={styles.smallText}>
                      {`Max.temp: ${Math.round(
                        (day.Temperature.Maximum.Value - 32) / 1.8
                      )} C`}
                    </Text>
                  </View>
                  <View style={styles.container}>
                    <View style={styles.imageContainer}>
                      <Image style={styles.tinyLogo} source={dayIco} />
                      <Text
                        style={styles.smallText}
                      >{`${day.Day.IconPhrase}`}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                      <Image style={styles.tinyLogo} source={nightIco} />
                      <Text
                        style={styles.smallText}
                      >{`${day.Night.IconPhrase}`}</Text>
                    </View>
                  </View>
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

export default Today;

const styles = StyleSheet.create({
  infoContainer: {
    width: 300,
    height: 110,
    marginTop: 10,
    marginBottom: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",

    borderRadius: 15,
    backgroundColor: "rgba(75, 75, 75, 0.452)",
  },
  tinyLogo: {
    width: 24,
    height: 24,
  },

  bigText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  smallText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 12,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  waiter: {},
  scene: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f08b6c",
  },
});
