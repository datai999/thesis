import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default {
  title: "Giới thiệu",
  body: () => {
    return (
      <Layout>
        <Text category="s1">
          Đề tài: Xây dựng hệ thống đánh giá luận văn tốt nghiệp
        </Text>
        <Text>
          {"\n\t"}
          Là hệ thống hỗ trợ số hóa quá trình đánh giá luận văn tốt nghiệp của
          sinh viên.
        </Text>
        <Text>
          {"\n\t"}
          Đối tượng sử dụng chính là giáo viên và giáo vụ.
        </Text>
        <Text>
          {"\n\t"}
          Bộ môn: Hệ thống thông tin
        </Text>
        <Text>
          {"\n\t"}
          Được đề xuất và hướng dẫn bởi Th.S Nguyễn Thị Ái Thảo, cán bộ giảng
          dạy tại trường Đại học Bách Khoa.
        </Text>
        <Text>
          {"\n\t"}
          Nhóm sinh viên hiện thực gồm 1 thành viên: Nguyễn Đức Anh Tài
          (MSSV:1713015)
        </Text>
        <Text>
          {"\n\t"}
          Ngày bắt đầu: 30/3/2021
        </Text>
      </Layout>
    );
  },
};
