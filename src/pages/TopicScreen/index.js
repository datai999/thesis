import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";

import TopicTopBar from "./Main/TopicTopBar";
import TopicAnalyse from "./Main/TopicAnalyse";
import TopicTable from "./Main/TopicTable";
import TopicBottom from "./Main/TopicBottom";

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

const TopicScreen = () => {
  const [sortField, setSortField] = React.useState("TopicCode");
  const [sortType, setSortType] = React.useState("Asc");
  const [data, setData] = React.useState(fakeData);

  var tags = [sortField + "-" + sortType];

  return (
    <Layout style={styles.container}>
      <TopicTopBar sortField={sortField} sortType={sortType} />
      <TopicAnalyse tags={tags} />
      <TopicTable data={data} />
      <TopicBottom total={data.length} currentPage={1} totalPage={2} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default TopicScreen;
