import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Image } from "react-native";

export default {
  title: "Các bảng nhóm nhân sự (ps)",
  body: () => {
    return (
      <Layout>
        <Text>
          {"\t"}Nhóm các table liên quan đến nhân sự (person), kí hiệu là ps
        </Text>
        <Text>
          {"\t\t"}- Bảng PersonBaseTable: Là bảng cơ sở của nhóm ps. Nó là bảng
          ảo không có thực trong database. Các bảng thuộc nhóm ps đều có tất cả
          các field thuộc bảng này.
        </Text>
        <Text>{"\t\t"}- Bảng ps_academy_staff: Thông tin giáo vụ</Text>
        <Text>{"\t\t"}- Bảng ps_teacher: Thông tin giáo viên</Text>
        <Text>{"\t\t"}- Bảng ps_student: Thông tin sinh viên</Text>

        <Layout style={{ alignItems: "center", marginTop: 5 }}>
          <Image
            source={require("assets/img/group-ps.png")}
            resizeMode="stretch"
            style={{
              height: 400,
              width: 500,
            }}
          />
          <Text>ERD diagram của nhóm ps</Text>
        </Layout>
      </Layout>
    );
  },
};
