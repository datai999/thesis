import React from "react";
import { Image } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

export default {
  title: "Kiến trúc hệ thống",
  body: () => {
    return (
      <Layout style={{ alignItems: "center" }}>
        <Image
          source={require("assets/img/system-architecture.png")}
          resizeMode="stretch"
          style={{
            height: 520,
            width: 300,
          }}
        />
      </Layout>
    );
  },
};
