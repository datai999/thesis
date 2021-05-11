import { Layout } from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import TopicAnalyse from "./mains/TopicAnalyse";
import TopicBottom from "./mains/TopicBottom";
import TopicTable from "./mains/TopicTable";
import TopicTopBar from "./mains/TopicTopBar";

const defaultPage = {
  number: 0,
  size: 5,
};

const TopicScreen = () => {
  const [sortField, setSortField] = React.useState("TopicCode");
  const [sortType, setSortType] = React.useState("Asc");
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(defaultPage);

  let tags = [sortField + "-" + sortType];

  const fetchData = async (nextPage) => {
    try {
      const response = await TopicAssignApi.getPaging(nextPage);
      setData(response.content);
      let newPage = {
        number: response.number,
        size: response.size,
        totalPages: response.totalPages,
        totalElements: response.totalElements,
      };
      setPage(newPage);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, []);

  return (
    <Layout style={styles.container}>
      <TopicTopBar
        sortField={sortField}
        sortType={sortType}
        addNewTopic={(newTopic) => {
          let newData = _.cloneDeep(data);
          newData.push(newTopic);
          setData(newData);
        }}
      />
      <TopicAnalyse tags={tags} />
      <TopicTable data={data} />
      <TopicBottom page={page} callBack={fetchData} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default TopicScreen;
