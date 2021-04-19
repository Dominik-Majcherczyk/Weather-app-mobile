import React from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const AppHeader = () => {
  const bgImage = "https://i.pinimg.com/originals/6e/c7/69/6ec76953bc587432d7aa9201f48a7ca9.jpg",
  const logo = "http://lh3.googleusercontent.com/napgxTBO7Efx-5NrdG_Mrfh6tISWc7Q1V6mXhQl-yDMOCPQIeioaTnUG5-zAjnFP-_o=w300"
  return (
    <ImageBackground
      source={{
        uri: bgImage,
      }}
      style={styles.bgImage}

    >
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="WeatherApp" subtitle="forecast" color="white" />
        <Image
          className="logo"
          style={styles.image}
          source={{
            uri: logo,
          }}
        />
      </Appbar.Header>
    </ImageBackground>
  );
};

export default AppHeader;

const styles = StyleSheet.create({

  bgImage: {
    width: "100%",
    resizeMode: "cover",
  },
  header: {
    backgroundColor: "transparent",
  },
  image: {
    width: 30, 
    height: 30,
  },
})