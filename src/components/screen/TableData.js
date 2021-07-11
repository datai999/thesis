import { Button, IndexPath, Layout, Select, Text } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import MyModal from "components/Modal";
import { selectItems } from "components/Select";
import tableStyle from "data/tableStyle";
import _ from "lodash";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { DataTable, List } from "react-native-paper";
import { getLinkProps, getRenderText } from "utils";
import i18n from "utils/i18n";

export const TableData = ({
  oldLinks,
  fields,
  updateForm,
  data,
  topContent,
  filterVisible = false,
  propCallback = {},
  callback,
}) => {
  const [updateFormVisible, setUpdateFormVisible] = React.useState(false);
  const [currentRow, setCurrenRow] = React.useState(null);

  const links = fields ? fields.map((field) => field.link) : oldLinks;

  const modalUpdateFormProps = {
    ...updateForm,
    visible: updateFormVisible,
    cancel: () => setUpdateFormVisible(false),
    body: () => updateForm.body(currentRow),
    submit: async () => {
      try {
        let response = await updateForm.submit();
        let index = data.map((x) => x.id).indexOf(response.id);
        data[index] = response;
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  };

  const rowCallBack = (row) => {
    setCurrenRow(row);
    setUpdateFormVisible(true);
  };

  return (
    <DataTable style={{ flex: 1, margin: 5 }}>
      <MyModal {...modalUpdateFormProps} />
      <TableHeader
        links={links}
        propCallback={propCallback}
        callback={callback}
        fields={fields}
      />
      {topContent && topContent({ links, rowCallBack })}
      {filterVisible && (
        <TableFilter
          links={links}
          propCallback={propCallback}
          callback={callback}
          fields={fields}
        />
      )}
      <ScrollView>
        <TableContent links={links} data={data} rowCallBack={rowCallBack} />
      </ScrollView>
      <TableBottom propCallback={propCallback} callback={callback} />
    </DataTable>
  );
};

export const TableHeader = ({ links, propCallback, callback }) => {
  const [sortField, setSortField] = React.useState(propCallback.sort?.field);
  const [descending, setDescending] = React.useState(
    propCallback.sort?.descend
  );

  React.useEffect(() => {
    if (descending == null) propCallback.sort = {};
    else propCallback.sort = { field: sortField, descend: descending };
    callback(propCallback);
  }, [sortField, descending]);

  function getSortDirection(propsApi) {
    if (propsApi == sortField) {
      return descending ? "descending" : "ascending";
    }
    return null;
  }

  function setSort(propsApi) {
    if (propsApi != sortField) {
      setDescending(true);
    } else {
      if (!descending) {
        setDescending(null);
        setSortField(null);
        return;
      } else setDescending(false);
    }
    setSortField(propsApi);
  }

  return (
    <DataTable.Header>
      <DataTable.Title style={tableStyle.no}>
        <Text category="s1">No</Text>
      </DataTable.Title>
      {getLinkProps(links).map((linkProp) => {
        return (
          <Button
            key={linkProp.api}
            appearance={linkProp.api != sortField ? "ghost" : "filled"}
            status="basic"
            style={[
              tableStyle[linkProp.api.split(".").pop()],
              {
                marginHorizontal: 1,
                paddingHorizontal: 0,
              },
            ]}
          >
            <DataTable.Title
              sortDirection={getSortDirection(linkProp.api)}
              onPress={() => setSort(linkProp.api)}
            >
              <Text category="s1" style={{ fontSize: 13 }}>
                {i18n.t(linkProp.label)}
              </Text>
            </DataTable.Title>
          </Button>
        );
      })}
    </DataTable.Header>
  );
};

export function renderCell(fieldValue) {
  const reducerLastName = (accumulator, currentValue) =>
    accumulator + ", " + currentValue.split(" ").slice(-1).join();

  const reducer = (accumulator, currentValue) =>
    accumulator + ", " + currentValue;

  let renderValue = getRenderText(fieldValue);
  if (Array.isArray(renderValue)) {
    return (
      <List.Accordion title={renderValue.reduce(reducer, "").slice(2)}>
        {renderValue?.map((value) => {
          return <List.Item key={value} title={value} />;
        })}
      </List.Accordion>
    );
  }
  return renderValue;
}

export const TableFilter = ({ links, propCallback, callback }) => {
  const inputStyle = StyleSheet.create({
    input: {
      marginHorizontal: 1,
    },
  });

  const filter = (field, value) => {
    let nextPropCallback = {
      ...propCallback,
    };
    if (value == null || value == "undefined" || value == "") {
      delete nextPropCallback.filter[field];
    } else {
      nextPropCallback.filter[field] = value;
    }

    callback(nextPropCallback);
  };

  const inputProps = (linkProp) => {
    return {
      placeholder: linkProp.placeholder,
      key: linkProp.api,
      size: "small",
      value: propCallback.filter[linkProp.api],
      style: [tableStyle[linkProp.api.split(".").pop()], inputStyle.input],
      callBack: (nextValue) => filter(linkProp.api, nextValue),
    };
  };

  return (
    <DataTable.Header>
      <DataTable.Title style={tableStyle.no}>
        <Text category="s1">{i18n.t("origin.filter")}</Text>
      </DataTable.Title>
      {getLinkProps(links).map((linkProp) => {
        return <MyInput {...inputProps(linkProp)} />;
      })}
    </DataTable.Header>
  );
};

export const TableContent = ({ links, data = [], rowCallBack }) => {
  const linkProps = getLinkProps(links);

  if (data == null) return null;

  return data.map((row, index) => {
    return (
      <DataTable.Row key={row.id}>
        <DataTable.Cell style={tableStyle.no} onPress={() => rowCallBack(row)}>
          {renderCell(index + 1)}
        </DataTable.Cell>
        {linkProps.map((linkProp) => {
          let fieldValue = _.get(row, linkProp.api);
          return (
            <DataTable.Cell
              style={tableStyle[linkProp.api.split(".").pop()]}
              key={linkProp.api}
              onPress={() => rowCallBack(row)}
            >
              {renderCell(fieldValue)}
            </DataTable.Cell>
          );
        })}
      </DataTable.Row>
    );
  });
};

export const TableBottom = ({ propCallback, callback }) => {
  const [selectedSize, setSelectedSize] = React.useState(new IndexPath(0));
  const page = propCallback.page;

  const sizeRank = [10, 20, 30, 50, 100];

  const fetchPage = (newNumber, newSize) => {
    let nextPage = {
      ...propCallback,
      page: {
        number: newNumber,
        size: newSize,
      },
    };
    callback(nextPage);
  };

  return (
    <Layout
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: "5%",
      }}
    >
      <Layout>
        <Text>
          {i18n.t("origin.page")}: {page.number + 1} / {page.totalPages}
        </Text>
        <Text>
          {i18n.t("origin.totalRecord")}: {page.totalElements}
        </Text>
      </Layout>
      <DataTable.Pagination
        page={page.number}
        numberOfPages={page.totalPages}
        onPageChange={(nextPage) => {
          fetchPage(nextPage, sizeRank[selectedSize.row]);
        }}
      />
      <Layout style={{ minWidth: 90 }}>
        <Text>{i18n.t("origin.record")}</Text>
        <Select
          size="small"
          value={sizeRank[selectedSize.row]}
          selectedIndex={selectedSize}
          onSelect={(index) => {
            setSelectedSize(index);
            fetchPage(0, sizeRank[index - 1]);
          }}
        >
          {selectItems(sizeRank, {})}
        </Select>
      </Layout>
    </Layout>
  );
};
