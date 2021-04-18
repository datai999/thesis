import React from "react";

import { Layout, Divider } from "@ui-kitten/components";

import styles from "./styles";
import TopicTableHeader from "./TopicTableHeader";
import TopicTableContent from "./TopicTableContent";

const TopicTable = ({ data }) => {
  const [setting, setSetting] = React.useState(defaultSetting);

  return (
    <Layout>
      <TopicTableHeader setting={setting} />
      <Divider />
      <TopicTableContent setting={setting} data={data} />
    </Layout>
  );
};

const defaultSetting = {
  topicCode: {
    title: "Code",
    hide: false,
    style: [styles.column, styles.code],
  },
  semester: {
    title: "Semester",
    hide: false,
    style: [styles.column, styles.semester],
  },
  majors: {
    title: "Majors",
    hide: false,
    style: [styles.column, styles.majors],
  },
  educationMethod: {
    title: "Edu Method",
    hide: false,
    style: [styles.column, styles.educationMethod],
  },
  topicName: {
    title: "Topic Name",
    hide: false,
    style: [styles.column, styles.topicName],
  },
  guideTeacher: {
    title: "Guide Teacher",
    hide: false,
    style: [styles.column, styles.guideTeacher],
  },
  students: {
    title: "Students",
    hide: false,
    style: [styles.column, styles.students],
  },
};

export default TopicTable;
