import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Divider, List, Text, MenuItem } from "@ui-kitten/components";

import TopicBottom from "./TopicBottom";

import { ArrowUpIcon, ArrowDownIcon } from "../../../components/icons";

const fakeData = new Array(2).fill({
  topicCode: "123",
  topicName: "Name of topic",
  guideTeacher: "Nguyen Thi Ai",

  semester: "202",
  majors: ["Computer Science", "Computer Engineering"],
  educationMethod: "Formal",
  maxStudentTake: 3,
  minStudentTake: 1,

  description: "description",

  mainTask: "To do something",
  thesisTask: "Todo something when thesis",
  node: "note",

  students: ["Nguyen Duc Anh Tai", "Tai Nguyen Duc Anh"],
});

const TopicTable = () => {
  const [setting, setSetting] = React.useState(defaultSetting);
  const [data, setData] = React.useState(fakeData);

  return (
    <Layout>
      <TopicRowHeader setting={setting} />
      <Divider />
      <List
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={({ index, item }) => (
          <TopicRow index={index} topic={item} setting={setting} />
        )}
      />
      <Divider />
      <TopicBottom total={data.length} currentPage={1} totalPage={2} />
    </Layout>
  );
};

const TopicRowHeader = ({ setting }) => (
  <List
    horizontal={true}
    data={Object.values(setting)}
    renderItem={({ item }) =>
      item.hide ? null : (
        <MenuItem
          style={item.style.concat(styles.columnHeader)}
          title={item.title}
        />
      )
    }
  />
);

const TopicRow = ({ index, topic, setting }) => {
  return (
    <List
      horizontal={true}
      data={Object.keys(setting)}
      renderItem={({ item }) => {
        if (setting[item].hide) return null;
        if (typeof topic[item] == "string")
          return <MenuItem style={setting[item].style} title={topic[item]} />;
        return (
          <List
            style={setting[item].style}
            data={topic[item]}
            renderItem={({ index, item }) => <MenuItem title={item} />}
          />
        );
      }}
    />
  );
};

export default TopicTable;

const styles = StyleSheet.create({
  topicRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    margin: 3,
  },
  columnHeader: {
    fontSize: 30,
  },
  code: {
    width: 80,
    textAlign: "center",
  },
  semester: {
    width: 100,
    textAlign: "center",
  },
  majors: {
    width: 180,
  },
  educationMethod: {
    width: 110,
    textAlign: "center",
  },
  topicName: {
    width: 300,
  },
  guideTeacher: {
    width: 200,
  },
  students: {
    width: 200,
  },
});

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
