import { Layout } from "@ui-kitten/components";
import TeacherApi from "api/person/TeacherApi";
import { TeacherForm } from "components/form";
import TopBar from "components/screen/TopBar";
import { Table } from "components/table";
import React from "react";
import { StyleSheet } from "react-native";

const defaultPage = {
  number: 0,
  size: 5,
};

const sortDefault = {
  sort: "createdAt",
  descend: true,
};

const arrLink = [
  "person.code",
  "person.name",
  "person.gender",
  "person.subjectDepartment",
  "person.degree",
  "person.email",
  "person.phone",
];

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
      <Layout style={styles.topBar}>
        <TopBar
          form={TeacherForm}
          addNewRecord={(newRecord) => {
            let newData = _.cloneDeep(data);
            newData.unshift(newRecord);
            setData(newData);
          }}
        />
      </Layout>
      <Table
        arrLink={arrLink}
        headerText={"teacher.update"}
        updateForm={TeacherForm}
        data={data}
        page={page}
        pageCallBack={fetchData}
      />
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
