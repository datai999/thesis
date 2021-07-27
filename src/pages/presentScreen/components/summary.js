import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default {
  title: "Tổng kết",
  body: () => {
    return (
      <Layout>
        <Text>Kết quả đạt được:</Text>
        <Text>
          {"\t"}- Phân tích yêu cầu dự án: nắm bắt mục tiêu, phạm vi đề tài, các
          chức năng cần có của hệ thống.
        </Text>
        <Text>
          {"\t"}- Đưa ra quyết định phù hợp cho hệ thống trong tương lai
        </Text>
        <Text>{"\t"}- Tìm hiểu cơ sở lý thuyết về các công nghệ liên quan</Text>
        <Text>{"\t"}- Thiết kế và hiện thực các bảng trong cơ sở dữ liệu</Text>
        <Text>
          {"\t"}- Hiện thực một số chức năng trên 2 môi trường Web, Android
        </Text>

        <Text>{"\n"}Hạn chế tồn tại:</Text>
        <Text>{"\t"}- Chưa hoàn thành thiết kế cơ sở dữ liệu</Text>
        <Text>
          {"\t"}- Chưa hoàn thành được các chức năng cần có trong giai đoạn đề
          cương
        </Text>
        <Text>{"\t"}- Chưa kiểm tra trên nền tảng IOS</Text>

        <Text>{"\n"}Hướng phát triển:</Text>
        <Text>{"\t"}- Hoàn thành cơ sở dữ liệu</Text>
        <Text>{"\t"}- Hoàn thành các chức năng cần có của hệ thống</Text>
        <Text>{"\t"}- Thử nghiệm trên nền tảng IOS</Text>
      </Layout>
    );
  },
};
