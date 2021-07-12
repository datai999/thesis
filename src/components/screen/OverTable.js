import { useNavigation } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import { TableData } from "components/screen/TableData";
import TopBar from "components/screen/TopBar";
import localStorage from "data/localStorage";
import React from "react";
import { StyleSheet } from "react-native";
import { langHolder, toastService } from "utils";
import i18n from "utils/i18n";

const defaultPage = {
  number: 0,
  size: 10,
};

const OverTable = ({
  tableName,
  links,
  form,
  api,
  overTopBar,
  topContent,
  defaultProps = {},
}) => {
  const [data, setData] = React.useState([]);
  const [lang, setLang] = React.useState(i18n.languages);
  const [filterVisible, setFilterVisible] = React.useState(
    defaultProps?.filterVisible ?? false
  );
  const [fields, setFields] = React.useState([]);
  const [dataSearch, setDataSearch] = React.useState({
    page: defaultPage,
    sort: {},
    filter: {},
    ...defaultProps.dataSearch,
  });
  const navigation = useNavigation();

  const fetchSearchData = (param) => {
    api
      .pagingSearch(param)
      .then((response) => {
        setData(response.content);
        let newDataSearch = {
          ...param,
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

    if (!localStorage.table[tableName]?.visible) {
      localStorage.function.setTableVisible(tableName, defaultProps.fields);
    }
    setFields(localStorage.table[tableName].visible);
  }, []);

  React.useEffect(() => {
    fetchSearchData(dataSearch);
  }, [navigation]);

  React.useEffect(() => {
    localStorage.function.setTableVisible(tableName, fields);
  }, [fields]);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.topBar}>
        <TopBar
          fields={fields}
          setFields={setFields}
          form={form}
          overTopBar={overTopBar}
          filterVisible={filterVisible}
          setFilterVisible={setFilterVisible}
          addNewRecord={(newRecord) => {
            if (newRecord == "undefined" || newRecord == null) return;
            fetchSearchData(dataSearch);
          }}
        />
      </Layout>
      <TableData
        oldLinks={links}
        fields={fields}
        updateForm={form}
        data={data}
        topContent={topContent}
        filterVisible={filterVisible}
        propCallback={dataSearch}
        callback={fetchSearchData}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    maxHeight: "95%",
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default OverTable;
