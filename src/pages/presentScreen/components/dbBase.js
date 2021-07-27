import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";

export default {
  title: "Nền tảng thiết kế cơ sở dữ liệu",
  body: () => {
    return (
      <Layout>
        <Text>{"\t"}Phân loại các table của database ra làm 4 nhóm chính:</Text>
        <Layout style={{ alignItems: "center", marginVertical: 5 }}>
          <Image
            source={require("assets/img/group-table.png")}
            resizeMode="stretch"
            style={{
              height: 150,
              width: 300,
            }}
          />
          <Text>Mối quan hệ Foreign key giữa các nhóm table</Text>
        </Layout>

        <Text>{"\t"}Mọi bảng đều kế thừa từ bảng cơ sở: BaseTable</Text>
        <Text>{"\t"}Đa ngôn ngữ bằng json</Text>
        <Text>{"\t"}Giảm dư thừa dữ liệu bằng array</Text>
      </Layout>
    );
  },
};
