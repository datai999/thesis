import { useNavigation } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import { TableData } from "components/screen/TableData";
import TopBar from "components/screen/TopBar";
import React from "react";
import { StyleSheet } from "react-native";
import { langHolder, toastService } from "utils";
import i18n from "utils/i18n";

const defaultPage = {
  number: 0,
  size: 5,
};

const sortDefault = {
  field: "createdAt",
  descend: true,
};

const OverTable = ({ links, form, api, overTopBar, topContent }) => {
  const [data, setData] = React.useState([]);
  const [lang, setLang] = React.useState(i18n.languages);
  const [dataSearch, setDataSearch] = React.useState({
    page: defaultPage,
    sort: sortDefault,
  });
  const navigation = useNavigation();

  const fetchSearchData = (param) => {
    api
      .pagingSearch(param)
      .then((response) => {
        setData(response.content);
        let newDataSearch = {
          sort: {
            ...param.sort,
          },
          page: {
            number: response.number,
            size: response.size,
            totalPages: response.totalPages,
            totalElements: response.totalElements,
          },
        };
        setDataSearch(newDataSearch);
      })
      .catch((err) => toastService.error("toast.search.error", err));
  };

  React.useEffect(() => {
    langHolder.listeners.push(setLang);
    navigation.addListener("focus", () => {
      fetchSearchData(dataSearch);
    });
  }, []);

  React.useEffect(() => {
    fetchSearchData(dataSearch);
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
              fetchSearchData(dataSearch);
            }}
          />
        </Layout>
        <TableData
          links={links}
          updateForm={form}
          data={data}
          topContent={topContent}
          propCallback={dataSearch}
          callback={fetchSearchData}
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
