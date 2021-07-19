import { useNavigation } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import { TableBody, TableTopBar } from "components/table";
import localStorage from "data/localStorage";
import React from "react";
import { StyleSheet } from "react-native";
import { languageService, toastService } from "service";
import { i18n } from "utils";

const defaultPage = {
  number: 0,
  size: 10,
};

const OverTable = ({
  tableName,
  form,
  api,
  overTopBar,
  topContent,
  ...props
}) => {
  const [data, setData] = React.useState([]);
  const [lang, setLang] = React.useState(i18n.languages);
  const [filterVisible, setFilterVisible] = React.useState(
    props?.filterVisible ?? false
  );
  const [fields, setFields] = React.useState(props?.fields ?? []);
  const [dataSearch, setDataSearch] = React.useState({
    page: defaultPage,
    sort: {},
    filter: {},
    ...props.dataSearch,
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
    languageService.onNextState(setLang);
    navigation.addListener("focus", () => {
      fetchSearchData(dataSearch);
    });

    if (!localStorage.table || !localStorage.table[tableName]) {
      localStorage.function.setTable(tableName, { fields });
    }

    setFields(localStorage.table[tableName].fields);
  }, []);

  React.useEffect(() => {
    fetchSearchData(dataSearch);
  }, [navigation]);

  React.useEffect(() => {
    let nextTable = { fields };
    localStorage.function.setTable(tableName, nextTable);
  }, [fields]);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.topBar}>
        <TableTopBar
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
      <TableBody
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
