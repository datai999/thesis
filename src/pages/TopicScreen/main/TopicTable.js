import React from "react";
import { View, StyleSheet } from "react-native";
import { Divider, List, Text } from "@ui-kitten/components";

import TopicBottom from "./TopicBottom";

const data = new Array(8).fill({
  topicCode: "123",
  topicName: "Name of topic",
  guideTeacher: "Nguyen Thi Ai",

  semester: "202",
  major: "Computer Science",
  educationMethod: "Formal",
  maxStudentTake: 3,
  minStudentTake: 1,

  description: "description",

  mainTask: "To do something",
  thesisTask: "Todo something when thesis",
  node: "note",
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

const TopicRowHeader = () => {
  return (
    <View style={styles.topicRow}>
      <Text style={[styles.column, styles.columnHeader, styles.code]}>
        Code
      </Text>
      <Text style={[styles.column, styles.columnHeader, styles.name]}>
        Name
      </Text>
      <Text style={[styles.column, styles.columnHeader, styles.guideTeacher]}>
        Guide Teacher
      </Text>
    </View>
  );
};

const TopicRow = ({ index, topic }) => {
  return (
    <View style={styles.topicRow}>
      <Text style={[styles.column, styles.code]}>{topic.topicCode}</Text>
      <Text style={[styles.column, styles.name]}>{topic.topicName}</Text>
      <Text style={[styles.column, styles.guideTeacher]}>
        {topic.guideTeacher}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topicRow: {
    flexDirection: "row",
  },
  column: {
    margin: 5,
    padding: 5,
  },
  columnHeader: {
    textAlign: "center",
  },
  code: {},
  name: { width: "25%" },
  guideTeacher: { width: "20%" },
});

export default TopicTable;
