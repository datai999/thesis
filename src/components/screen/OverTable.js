import { useNavigation } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import { TableData } from "components/screen/TableData";
import TopBar from "components/screen/TopBar";
import React from "react";
import { StyleSheet } from "react-native";
import { langHolder } from "utils";
import i18n from "utils/i18n";

const defaultPage = {
  number: 0,
  size: 5,
};

const sortDefault = {
  sort: "createdAt",
  descend: true,
};

const OverTable = ({ links, form, api, overTopBar, topContent }) => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(defaultPage);
  const [sort, setSort] = React.useState(sortDefault);
  const [lang, setLang] = React.useState(i18n.languages);
  const navigation = useNavigation();

  React.useEffect(() => {
    langHolder.listeners.push(setLang);
  }, [lang]);

  const fetchData = async (nextPage) => {
    try {
      const response = await api.getPaging({ ...nextPage, ...sort });
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
    return navigation.addListener("focus", () => {
      fetchData(page);
    });
  }, [navigation]);

  return (
    <Layout>
      <Layout style={styles.container}>
        <Layout style={styles.topBar}>
          <TopBar
            form={form}
            overTopBar={overTopBar}
            addNewRecord={(newRecord) => {
              if (newRecord == "undefined" || newRecord == null) return;
              let newData = _.cloneDeep(data);
              newData.unshift(newRecord);
              setData(newData);
            }}
          />
        </Layout>
        <TableData
          links={links}
          updateForm={form}
          data={data}
          page={page}
          pageCallBack={fetchData}
          topContent={topContent}
        />
      </Layout>
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

export default OverTable;
