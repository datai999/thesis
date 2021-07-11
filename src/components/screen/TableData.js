import { IndexPath, Layout, Select, Text } from "@ui-kitten/components";
import MyModal from "components/Modal";
import { selectItems } from "components/Select";
import { TableFilter, TableHeader } from "components/table";
import tableStyle from "data/tableStyle";
import _ from "lodash";
import React from "react";
import { ScrollView } from "react-native";
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

  const commonProps = {
    links: links,
    propCallback: propCallback,
    callback: callback,
    fields: fields,
  };

  return (
    <DataTable style={{ flex: 1, margin: 5 }}>
      <MyModal {...modalUpdateFormProps} />
      <TableHeader {...commonProps} />
      {topContent && topContent({ links, rowCallBack })}
      {filterVisible && <TableFilter {...commonProps} />}
      <ScrollView>
        <TableContent links={links} data={data} rowCallBack={rowCallBack} />
      </ScrollView>
      <TableBottom propCallback={propCallback} callback={callback} />
    </DataTable>
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
