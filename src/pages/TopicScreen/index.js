import React from "react";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";

import TopicTopBar from "./main/TopicTopBar";
import TopicAnalyse from "./main/TopicAnalyse";
import TopicTable from "./main/TopicTable";

const TopicScreen = () => {
  const [sortField, setSortField] = React.useState("TopicCode");
  const [sortType, setSortType] = React.useState("Asc");

  var tags = [sortField + "-" + sortType];

  return (
    <Layout style={styles.container}>
      <TopicTopBar sortField={sortField} sortType={sortType} />
      <TopicAnalyse tags={tags} />
      <TopicTable />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default TopicScreen;
