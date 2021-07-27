import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";

export default {
  title: "Các bảng nhóm đề tài (tp)",
  body: () => {
    return (
      <Layout>
        <Layout style={{ alignItems: "center", marginTop: 5 }}>
          <Image
            source={require("assets/img/group-tp.png")}
            resizeMode="stretch"
            style={{
              height: 500,
              width: 500,
            }}
          />
          <Text>ERD diagram của nhóm tp</Text>
        </Layout>
      </Layout>
    );
  },
};
