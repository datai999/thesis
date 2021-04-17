import React from "react";
import { View, StyleSheet, ListItem } from "react-native";
import {
  Divider,
  List,
  Text,
  Button,
  IndexPath,
  Menu,
  MenuItem,
  Icon,
  ImageProps,
  Card,
} from "@ui-kitten/components";

import TopicBottom from "./TopicBottom";

import { ArrowUpIcon, ArrowDownIcon } from "../../../components/icons";

const data = new Array(5).fill({
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

  students: ["Nguyen Duc Anh Tai", "Tai Nguyen Duc Anh", "Duc Anh Tai"],
});

const TopicTable = () => {
  const [topicList, setTopicList] = React.useState([]);

  React.useEffect(() => {
    setTopicList(data);
  }, []);

  return (
    <View>
      <TopicRowHeader />
      <List
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={({ index, item }) => (
          <TopicRow index={index} topic={item} />
        )}
      />
      <TopicBottom total={topicList.length} currentPage={1} totalPage={2} />
    </View>
  );
};

const TopicRowHeader = (props) => {
  const [sortedIndex, setSortedIndex] = React.useState(new IndexPath(2));
  const [sorted, setSorted] = React.useState(true);

  return (
    <View style={styles.topicRow}>
      <MenuItem
        style={[styles.column, styles.columnHeader, styles.code]}
        accessoryRight={ArrowDownIcon}
        title="Code"
      />
      <MenuItem
        style={[styles.column, styles.columnHeader, styles.semester]}
        accessoryRight={ArrowDownIcon}
        title="Semester"
      />
      <MenuItem
        style={[styles.column, styles.columnHeader, styles.majors]}
        accessoryRight={ArrowDownIcon}
        title="Majors"
      />
      <MenuItem
        style={[styles.column, styles.columnHeader, styles.educationMethod]}
        accessoryRight={ArrowDownIcon}
        title=" Edu Method"
      />
      <MenuItem
        style={[styles.column, styles.columnHeader, styles.topicName]}
        accessoryRight={ArrowDownIcon}
        title="Topic Name"
      />
      <MenuItem
        style={[styles.column, styles.columnHeader, styles.guideTeacher]}
        accessoryRight={ArrowDownIcon}
        title="Guide Teacher"
      />
      <MenuItem
        style={[styles.column, styles.columnHeader, styles.students]}
        accessoryRight={ArrowDownIcon}
        title="Students"
      />
    </View>
  );
};

const TopicRow = ({ index, topic }) => (
  <View style={styles.topicRow}>
    <MenuItem style={[styles.column, styles.code]} title={topic.topicCode} />
    <MenuItem style={[styles.column, styles.semester]} title={topic.semester} />
    <List
      style={[styles.column, styles.majors]}
      data={topic.majors}
      ItemSeparatorComponent={Divider}
      renderItem={({ index, item }) => <MenuItem title={item} />}
    />
    <MenuItem
      style={[styles.column, styles.educationMethod]}
      title={topic.educationMethod}
    />
    <MenuItem style={[styles.column, styles.topicName]} title="Topic Name" />
    <MenuItem
      style={[styles.column, styles.guideTeacher]}
      title="Guide Teacher"
    />
    <List
      style={[styles.column, styles.students]}
      data={topic.students}
      ItemSeparatorComponent={Divider}
      renderItem={({ index, item }) => <MenuItem title={item} />}
    />
  </View>
);

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
    width: 80,
    textAlign: "center",
  },
  majors: {
    width: 180,
  },
  educationMethod: {
    width: 150,
    textAlign: "center",
  },
  topicName: {
    flex: 1,
  },
  guideTeacher: {
    width: "15%",
  },
  students: {
    width: "15%",
  },
});

export default TopicTable;
