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
  const [page, setPage] = React.useState(defaultPage);
  const [sort, setSort] = React.useState(sortDefault);
  const [lang, setLang] = React.useState(i18n.languages);
  const [dataSearch, setDataSearch] = React.useState({
    page: defaultPage,
    sort: sortDefault,
  });
  const navigation = useNavigation();

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

  const fetchSearchData = (param) => {
    api
      .search(param)
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
  }, []);

  React.useEffect(() => {
    navigation.addListener("focus", () => {
      if (api.search) fetchSearchData(dataSearch);
      else {
        fetchData(page);
      }
    });
  }, [navigation, dataSearch]);

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
          propsCallback={dataSearch}
          callback={setDataSearch}
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
