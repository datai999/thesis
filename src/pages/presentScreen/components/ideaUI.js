import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default {
  title: "Ý tưởng hiện thực UI đa nền tảng",
  body: () => {
    return (
      <Layout>
        <Text>Khó khăn về UI:</Text>
        <Text>
          {"\t"}- Đội ngũ phát triển 1 thành viên và không hề có kinh nghiệm
          front-end.
        </Text>
        <Text>{"\t"}- Quá nhiều frame-work và library UI để lựa chọn.</Text>
        <Text>
          {"\t"}- Yêu cầu hiện thực trên nhiều nền tảng khiến khối lượng công
          việc front-end trở nên rất nhiều.
        </Text>
        <Text>{"\n"}Ý tưởng: Hiện thực từ di động đến web</Text>
        <Text>{"\t"}- Đáp ứng trải nghiệm ứng dụng di động tốt.</Text>
        <Text>{"\t"}- Hiệu năng của ứng dụng được đảm bảo.</Text>
        <Text>{"\t"}- Giảm phụ thuộc vào trang web xuống rất nhiều.</Text>
        <Text>{"\t"}- Có thể tái sử dụng các components UI nhỏ và lớn</Text>
      </Layout>
    );
  },
};
