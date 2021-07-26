import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";

export default {
  title: "Các bảng nhóm điểm (sc)",
  body: () => {
    return (
      <Layout>
        <Layout style={{ alignItems: "center", marginTop: 5 }}>
          <Image
            source={require("assets/img/group-sc.png")}
            resizeMode="stretch"
            style={{
              height: 500,
              width: 500,
            }}
          />
          <Text>ERD diagram của nhóm sc</Text>
        </Layout>
      </Layout>
    );
  },
};
