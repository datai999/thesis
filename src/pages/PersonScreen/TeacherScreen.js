import { Layout } from "@ui-kitten/components";
import TeacherApi from "api/person/TeacherApi";
import React from "react";
import { StyleSheet } from "react-native";
import TeacherTable from "./mains/TeacherTable";

const defaultPage = {
  number: 0,
  size: 5,
};

const sortDefault = {
  sort: "createdAt",
  descend: true,
};

const TeacherScreen = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(defaultPage);
  const [sort, setSort] = React.useState(sortDefault);

  const fetchData = async (nextPage) => {
    try {
      const response = await TeacherApi.getPaging({ ...nextPage, ...sort });
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

  React.useEffect(() => {
    fetchData(page);
  }, []);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.topBar}></Layout>
      <TeacherTable data={data} page={page} callBack={fetchData} />
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

export default TeacherScreen;
