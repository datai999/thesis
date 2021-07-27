import { Layout, Text } from "@ui-kitten/components";
import React from "react";

export default {
  title: "Phân chia chức năng cho người dùng",
  body: () => {
    return (
      <Layout>
        <Text>
          {"\t"}
          Sinh viên: là người dùng phụ trong hệ thống, chỉ truy xuất thông tin
          trong quyền hạn.
        </Text>
        <Text>
          {"\n\t"}
          Giáo viên:
        </Text>
        <Text>
          {"\t\t"}- Là người tạo đề tài, theo dõi và quản lý đề tài và thêm sinh
          viên vào đề tài của mình.
        </Text>
        <Text>
          {"\t\t"}- Tham gia vào hệ thống với các vai trò như: giáo viên hướng
          dẫn chính, giáo viên đồng hướng dẫn, giáo viên phản biện, thành viên
          trong hội đồng chấm luận văn.
        </Text>
        <Text>
          {"\t\t"}- Chấm điểm và nhận xét cho từng sinh viên theo vai trò mà
          mình đảm nhận.
        </Text>
        <Text>
          {"\n\t"}
          Giáo vụ:
        </Text>
        <Text>
          {"\t\t"}- Là người quản lí thông tin sinh viên, giáo viên, hội đồng.
        </Text>
        <Text>
          {"\t\t"}- Phê duyệt: tài khoản giáo viên mới, đề tài mới, bảo lưu đề
          tài, ...
        </Text>
        <Text>
          {"\t\t"}- Phân công cho đề tài: giáo viên phản biện, hội đồng
        </Text>
        <Text>{"\t\t"}- Truy xuất các báo cáo, thống kê về nghiệp vụ.</Text>
        <Text>
          {"\n\t"}
          Quản trị hệ thống:
        </Text>
        <Text>{"\t\t"}- Phê duyệt tài khoản mới của giáo vụ.</Text>
        <Text>
          {"\t\t"}- Quản lí tiêu chí và mẫu tiêu chí, phương thức chấm điểm.
        </Text>
        <Text>
          {"\t\t"}- Thay đổi cài đặt của hệ thống: học kỳ hiện tại, phương thức
          đào tạo, thêm vị trí trong hội đồng, ...
        </Text>
        <Text>
          {"\t\t"}- Xem tình trạng hệ thống, truy xuất báo cáo về hệ thống.
        </Text>
      </Layout>
    );
  },
};
