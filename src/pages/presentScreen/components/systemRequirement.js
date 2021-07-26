import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default {
  title: "Những tiêu chí mà hệ thống cần đáp ứng",
  body: () => {
    return (
      <Layout>
        <Text>{"\t"}- Hỗ trợ tiếng anh và tiếng việt</Text>
        <Text>{"\t"}- Có hướng dẫn cho người dùng mới</Text>
        <Text>{"\t"}- Bảo mật thông tin người dùng, điểm số</Text>

        <Text>
          {"\n\t"}- Chạy ổn định trên các môi trường Web, Android, IOS
        </Text>
        <Text>
          {"\t"}- Đồng nhất nghiệp vụ trên các môi trường Web, Android, IOS
        </Text>

        <Text>{"\n\t"}- Lưu log đầy đủ để truy vết khi cần</Text>
        <Text>
          {"\t"}- Thêm dữ liệu cũ được lưu trữ bằng Excel lên hệ thống
        </Text>
        <Text>{"\t"}- Có automation test trước khi cập nhật phiên bản mới</Text>
        <Text>
          {"\t"}- Chống chịu được những thời điểm có lượng truy cập cao đột xuất
        </Text>
      </Layout>
    );
  },
};
