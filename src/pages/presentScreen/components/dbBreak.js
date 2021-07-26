import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";

export default {
  title: "Các bảng nhóm khác (br)",
  body: () => {
    return (
      <Layout>
        <Text>
          {"\t"}Nhóm các table không thuộc 3 nhóm (ps, tp, sc), kí hiệu là br
        </Text>
        <Text>
          {"\t\t"}- Bảng br_const_data: Các dữ liệu ít hoặc gần như không thay
          đổi
        </Text>
        <Text>
          {"\t\t"}- Bảng br_setting: Các dữ liệu cài đặt chung của hệ thống
        </Text>

        <Layout style={{ alignItems: "center", marginTop: 15 }}>
          <Image
            source={require("assets/img/group-br.png")}
            resizeMode="stretch"
            style={{
              height: 400,
              width: 150,
            }}
          />
          <Text>ERD diagram của nhóm br</Text>
        </Layout>
      </Layout>
    );
  },
};
