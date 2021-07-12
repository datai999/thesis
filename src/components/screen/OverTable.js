import { useNavigation } from "@react-navigation/native";
import { Layout } from "@ui-kitten/components";
import { TableBody, TableTopBar } from "components/table";
import localStorage from "data/localStorage";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { i18n, langHolder, toastService } from "utils";
import { dimensionService } from "utils/service";

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
  defaultProps = { fields: [] },
  responsive = (dimensions, currentProps) => currentProps,
  ...props
}) => {
  const [data, setData] = React.useState([]);
  const [lang, setLang] = React.useState(i18n.languages);
  const [currentProps, setCurrentProps] = React.useState(defaultProps);
  const [filterVisible, setFilterVisible] = React.useState(
    defaultProps?.filterVisible ?? false
  );
  const [dataSearch, setDataSearch] = React.useState({
    page: defaultPage,
    sort: {},
    filter: {},
    ...defaultProps.dataSearch,
  });
  const navigation = useNavigation();

  const setFields = (nextFields) => {
    let nextProps = _.cloneDeep(currentProps);
    nextProps.fields = nextFields;
    nextProps.sort = {};
    nextProps.filter = {};
    localStorage.function.setTableVisible(tableName, nextFields);
    setCurrentProps(nextProps);
  };

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

  const responsiveLayout = (dimensions) => {};

  React.useEffect(() => {
    langHolder.listeners.push(setLang);
    navigation.addListener("focus", () => {
      fetchSearchData(dataSearch);
    });

    if (!localStorage.table || !localStorage.table[tableName]?.visible) {
      localStorage.function.setTableVisible(tableName, defaultProps.fields);
    }

    const actionOrder = async () => {
      await dimensionService.subscribe(responsiveLayout);
      setFields(localStorage.table[tableName].visible);
    };

    actionOrder();
  }, []);

  React.useEffect(() => {
    fetchSearchData(dataSearch);
  }, [navigation]);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.topBar}>
        <TableTopBar
          fields={currentProps.fields}
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
        fields={currentProps.fields}
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
