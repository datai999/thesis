import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default {
  title: "Tính năng chính",
  body: () => {
    return (
      <Layout>
        <Text>
          {"\t"}Quản lý thông tin đề tài: thêm mới, chỉnh sửa thông tin, trạng
          thái hiện tại, nhân sự liên quan
        </Text>
        <Text>
          {"\n\t"}
          Phân công đề tài:
        </Text>
        <Text>
          {"\t\t"}
          Sinh viên/ nhóm sinh viên thực hiện.
        </Text>
        <Text>{"\t\t"}- Giáo viên hướng dẫn</Text>
        <Text>{"\t\t"}- Giáo viên phản biện</Text>
        <Text>{"\t\t"}- Hội đồng chấm luận văn cho đề tài.</Text>
        <Text>
          {"\n\t"}
          Chấm điểm cho từng sinh viên trong nhóm luận văn. Phân biệt điểm giảng
          viên hướng dẫn, giảng viên phản biện, và các thành viên hội đồng và
          theo đợt chấm điểm.
        </Text>
        <Text>
          {"\n\t"}
          Quản lý các tiêu chí đánh giá cho đề tài/sinh viên (thiết kế dễ thay
          đổi).
        </Text>
      </Layout>
    );
  },
};
