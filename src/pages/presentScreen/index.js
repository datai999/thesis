import { Text } from "@ui-kitten/components";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { env, i18n } from "utils";

export default () => {
  return (
    <ImageBackground
      source={require("assets/img/cse2d.png")}
      style={styles.image}
      imageStyle={styles.imageStyle}
    >
      <Text style={styles.versionText}>
        {i18n.t("origin.version")}: {env.version}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginBtn: { marginBottom: 40 },
  androidBtn: {
    marginBottom: 120,
  },
  versionText: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    opacity: 0.9,
  },
});
