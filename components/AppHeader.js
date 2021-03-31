import React from "react";
import { Image, ImageBackground } from "react-native";
import { Appbar } from "react-native-paper";

const AppHeader = () => {
  return (
    <ImageBackground
      source={{
        uri:
          "https://i.pinimg.com/originals/6e/c7/69/6ec76953bc587432d7aa9201f48a7ca9.jpg",
      }}
      style={{ width: "100%", resizeMode: "cover" }}
    >
      <Appbar.Header style={{ backgroundColor: "transparent" }}>
        <Appbar.Content title="WeatherApp" subtitle="forecast" color="white" />
        <Image
          className="logo"
          style={{ width: 30, height: 30 }}
          source={{
            uri:
              "http://lh3.googleusercontent.com/napgxTBO7Efx-5NrdG_Mrfh6tISWc7Q1V6mXhQl-yDMOCPQIeioaTnUG5-zAjnFP-_o=w300",
          }}
        />
      </Appbar.Header>
    </ImageBackground>
  );
};

export default AppHeader;
