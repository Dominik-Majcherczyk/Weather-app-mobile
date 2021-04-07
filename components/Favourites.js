import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, Text, Image } from "react-native";

import { FAB } from "react-native-paper";
//local storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/Utilities/PixelRatio";

const Favourites = () => {
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

  //clearing storage
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(e);
    }

    console.log("Done.");
  };

  useEffect(() => {
    keys != null ? getValuesForKeys(keys) : null;
  }, [keys]);

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
    <View>
      {favs != null
        ? favs.map((fav) => {
            return <Text key={fav.key}>{fav[1]}</Text>;
          })
        : null}
      <FAB
        style={styles.fab}
        small={false}
        icon="heart"
        onPress={() => {
          // clearAll();
          getAllKeys();
          console.log("xdddd");
        }}
        type="string"
      />
    </View>
  );
};

export default Favourites;

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
    height: "60%",
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
