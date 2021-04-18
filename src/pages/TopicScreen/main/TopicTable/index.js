import React from "react";

import { Layout, Divider } from "@ui-kitten/components";

import TopicTableHeader from "./TopicTableHeader";
import TopicTableContent from "./TopicTableContent";

import defaultSetting from "./setting";

const TopicTable = ({ data }) => {
  const [setting, setSetting] = React.useState(defaultSetting);

  return (
    <Layout>
      <TopicTableHeader props={{ setting, setSetting }} />
      <Divider />
      <TopicTableContent props={{ setting, data }} />
    </Layout>
  );
};

export default TopicTable;
