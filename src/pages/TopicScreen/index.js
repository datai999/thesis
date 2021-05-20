import { Layout, Toggle } from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import i18n from "utils/i18n";
import TopicTablePaper from "./mains/TopicTablePaper";
import TopicTopBar from "./mains/TopicTopBar";

const defaultPage = {
  number: 0,
  size: 5,
};

const sortDefault = {
  sort: "createdAt",
  descend: true,
};

const TopicScreen = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(defaultPage);
  const [sort, setSort] = React.useState(sortDefault);
  const [english, setEnglish] = React.useState(i18n.languages == "en");

  const tags = [sort.sort + " " + (sort.descend ? "descend" : "increase")];

  const fetchData = async (nextPage) => {
    try {
      const response = await TopicAssignApi.getPaging({ ...nextPage, ...sort });
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
  }, [sort]);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.topBar}>
        <TopicTopBar
          sortField={page.sort}
          sortType={page.descend}
          addNewTopic={(newTopic) => {
            let newData = _.cloneDeep(data);
            newData.unshift(newTopic);
            setData(newData);
          }}
        />
        <Toggle
          checked={english}
          onChange={(nextCheck) => {
            i18n
              .changeLanguage(nextCheck ? "en" : "vi")
              .then(() => setEnglish(nextCheck));
          }}
        >
          {english ? "EN" : "VI"}
        </Toggle>
      </Layout>
      {/* <TopicAnalyse tags={tags} /> */}
      <TopicTablePaper data={data} page={page} callBack={fetchData} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TopicScreen;
