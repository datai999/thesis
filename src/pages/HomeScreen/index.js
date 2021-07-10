import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Screen = () => {
  return (
    <ImageBackground
      source={require("assets/img/cse2d.png")}
      style={styles.image}
      imageStyle={styles.imageStyle}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    opacity: 1,
  },
});

export default Screen;
