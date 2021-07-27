import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";

export default {
  title: "Triển khai hệ thống",
  body: () => {
    return (
      <Layout>
        <Text></Text>
        <Layout style={{ alignItems: "center" }}>
          <Image
            source={require("assets/img/env.png")}
            resizeMode="stretch"
            style={{
              height: 250,
              width: 700,
            }}
          />
          <Text>Phân chia môi trường{"\n\n"}</Text>
          <Image
            source={require("assets/img/ci-cd-flow.png")}
            resizeMode="stretch"
            style={{
              height: 100,
              width: 600,
            }}
          />
          <Text>Triển khai CI-CD</Text>
        </Layout>
      </Layout>
    );
  },
};
