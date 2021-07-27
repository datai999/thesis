import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default {
  title: "Kết quả đạt được",
  body: () => {
    return (
      <Layout>
        <Text>
          {"\t"}- Phân tích yêu cầu dự án: nắm bắt mục tiêu, phạm vi đề tài, các
          chức năng cần có của hệ thống.
        </Text>
        <Text>
          {"\n\t"}- Đưa ra quyết định phù hợp cho hệ thống trong tương lai
        </Text>
        <Text>
          {"\n\t"}- Tìm hiểu cơ sở lý thuyết về các công nghệ liên quan
        </Text>
        <Text>
          {"\n\t"}- Thiết kế và hiện thực các bảng trong cơ sở dữ liệu
        </Text>
        <Text>
          {"\n\t"}- Hiện thực một số chức năng trên 2 môi trường Web, Android
        </Text>
      </Layout>
    );
  },
};
