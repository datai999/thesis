import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default {
  title: "Công nghệ sử dụng",
  body: () => {
    return (
      <Layout>
        <Text>Công nghệ phía front-end:</Text>
        <Text>{"\t"}- React native: Framework lập trình frontend</Text>
        <Text>{"\t"}- Expo: Framwork để lập trình cross flatform</Text>
        <Text>{"\t"}- UI kitten: Component UI</Text>
        <Text>{"\t"}- Gh-pages: Deploy web frontend</Text>

        <Text>{"\n"}Công nghệ phía back-end:</Text>
        <Text>{"\t"}- Spring-boot: Framework lập trình backend</Text>
        <Text>{"\t"}- Hibernate: Kết nối cơ sở dữ liệu</Text>
        <Text>{"\t"}- PostgreSQL: Cơ sở dữ liệu</Text>
        <Text>
          {"\t"}- Firebase: Đăng kí, xác thực người dùng, chức năng thông báo
        </Text>
      </Layout>
    );
  },
};
