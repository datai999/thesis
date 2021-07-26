import React from "react";
import { Image } from "react-native";

export default {
  title: "Kiến trúc hệ thống",
  body: () => {
    return (
      <Image
        source={require("assets/img/system-architecture.png")}
        resizeMode="stretch"
        style={{
          flex: 1,
          height: 530,
          alignItems: "center",
          marginHorizontal: 150,
        }}
      />
    );
  },
};
