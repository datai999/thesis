import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default {
  title: "Giới thiệu",
  body: () => {
    return (
      <Layout>
        <Text>
          {"\t"}
          Năm 2020-2021 là những năm đầy biến động, khó khăn và những thách thức
          lớn, đại dịch COVID-19 đã làm thay đổi xã hội, thay đổi nền kinh tế,
          giáo dục của nhiều nước trên thế giới.
        </Text>
        <Text>
          {"\n\t"}
          Việc số hóa tài liệu trở nên cần thiết hơn. Cần công nghệ hóa các
          phương pháp làm việc cũng như các dịch vụ hoạt động ổn định với lượng
          người dùng chuyển đột ngột từ môi trường thực tại qua internet.
        </Text>
        <Text>
          {"\n\t"}
          Nhận thấy rằng hệ thống đánh giá luận văn của trường Đại học Bách khoa
          - Đại học Quốc gia TP.HCM cần được phát triển để có thể đáp ứng với
          nhiều khó khăn trong tương lai hơn. Đó là lý do chính nhóm đề xuất đề
          tài "Xây dưng hê thông đánh giá luận văn tốt nghiêp"
        </Text>
      </Layout>
    );
  },
};
