import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { FAB } from "react-native-paper";
import { setCity } from "../actions/index";
import { findCityWeatherInfo } from "../reducers/weather";
//local storage
import AsyncStorage from "@react-native-async-storage/async-storage";

const Favourites = ({ setIndex }) => {
  const dispatch = useDispatch();
  const [keys, setKeys] = useState(null);
  const [favs, setFavs] = useState(null);

  //get keys from storage
  const getAllKeys = async () => {
    let storageKeys = [];
    try {
      storageKeys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log(e);
    }
    setKeys(storageKeys);

    console.log(storageKeys);
  };
  //Delete fav
  removeFav = async (item) => {
    try {
      await AsyncStorage.removeItem(item);
      getAllKeys();
    } catch (e) {
      console.log(e);
    }
  };

  //clearing storage
  // const clearAll = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //   } catch (e) {
  //     console.log(e);
  //   }

  //   console.log("Done.");
  // };

  useEffect(() => {
    keys != null ? getValuesForKeys(keys) : null;
  }, [keys]);

  useEffect(() => {
    getAllKeys();
  }, []);

  // get data from storage
  const getValuesForKeys = async () => {
    let values;
    try {
      values = await AsyncStorage.multiGet(keys);
    } catch (e) {
      console.log(e);
    }
    setFavs(values);
  };

  return (
    <View style={styles.scene}>
      <Text style={styles.smallText}>Favourite places:</Text>
      <ScrollView>
        <View style={styles.container}>
          {favs != null ? (
            favs.map((fav) => {
              return (
                <View key={fav[0]} style={styles.content}>
                  <View style={styles.singleElement}>
                    <Text style={styles.smallContentText}>
                      {JSON.parse(fav[1]).cityName}
                    </Text>
                    <View style={styles.fabContainer}>
                      <FAB
                        style={styles.fabDelete}
                        small={false}
                        icon="delete-outline"
                        onPress={() => {
                          removeFav(fav[0]);
                        }}
                        type="string"
                      />
                      <FAB
                        style={styles.fabForward}
                        small={false}
                        icon="arrow-right-bold-outline"
                        onPress={() => {
                          dispatch(
                            findCityWeatherInfo(JSON.parse(fav[1]).cityKey)
                          );
                          dispatch(
                            setCity({
                              cityName: JSON.parse(fav[1]).cityName,
                              cityKey: JSON.parse(fav[1]).cityKey,
                            })
                          );
                          setIndex(0);
                        }}
                        type="string"
                      />
                    </View>
                  </View>
                </View>
              );
            })
          ) : (
            <Text style={styles.smallText}>No favs sets yet!</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  scene: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fa8b9d",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  singleElement: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fabContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 120,
    borderRadius: 25,
    backgroundColor: "rgba(221, 221, 221, 0.356)",
    marginTop: 25,
    marginBottom: 25,
  },
  smallText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
  smallContentText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 15,
    marginTop: 15,
  },

  fabDelete: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#eb6262",
    marginBottom: 15,
  },
  fabForward: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#bceb87",
    marginBottom: 15,
  },
});
