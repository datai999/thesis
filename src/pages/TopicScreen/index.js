import { Layout } from "@ui-kitten/components";
import Storage from "data/Storage";
import React from "react";
import { StyleSheet } from "react-native";
import TopicAnalyse from "./mains/TopicAnalyse";
import TopicBottom from "./mains/TopicBottom";
import TopicTable from "./mains/TopicTable";
import TopicTopBar from "./mains/TopicTopBar";

const TopicScreen = () => {
  const [sortField, setSortField] = React.useState("TopicCode");
  const [sortType, setSortType] = React.useState("Asc");
  const [data, setData] = React.useState(Storage["topic"]);

  var tags = [sortField + "-" + sortType];

  return (
    <Layout style={styles.container}>
      <TopicTopBar
        sortField={sortField}
        sortType={sortType}
        callBack={() => setData(getTopic())}
      />
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
