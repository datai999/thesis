import { IndexPath, Layout, Select, Text } from "@ui-kitten/components";
import { selectItems } from "components/Select";
import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { getLinkProps, getRenderText } from "utils";
import i18n from "utils/i18n";

export const TableHeader = ({ arrLink }) => {
  const linkProps = getLinkProps(arrLink);

  return (
    <DataTable.Header>
      {linkProps.map((linkProp) => {
        return (
          <DataTable.Title key={linkProp}>
            <Text>{i18n.t(linkProp.label)}</Text>
          </DataTable.Title>
        );
      })}
    </DataTable.Header>
  );
};

export const TableContent = ({ arrLink, data, rowProps }) => {
  const linkProps = getLinkProps(arrLink);

  const reducerLastName = (accumulator, currentValue) =>
    accumulator + ", " + currentValue.split(" ").slice(-1).join();

  const renderCell = (fieldValue) => {
    let renderValue = getRenderText(fieldValue);
    if (Array.isArray(renderValue)) {
      return (
        <List.Accordion
          title={renderValue.reduce(reducerLastName, "").slice(2)}
        >
          {renderValue?.map((value) => {
            return <List.Item key={value} title={value} />;
          })}
        </List.Accordion>
      );
    }
    return renderValue;
  };

  return data.map((row) => {
    return (
      <DataTable.Row key={row.id} {...rowProps(row)}>
        {linkProps.map((linkProp) => {
          let fieldValue = row[linkProp.api];
          return (
            <DataTable.Cell key={linkProp} {...rowProps(row)}>
              {renderCell(fieldValue)}
            </DataTable.Cell>
          );
        })}
      </DataTable.Row>
    );
  });
};

export const TableBottom = ({page, fetchPage}) => {
  const [selectedSize, setSelectedSize] = React.useState(new IndexPath(0));

  const sizeRank = [5, 10, 20, 30, 50, 100];

  return (
    <Layout style={styles.pagination}>
      <Layout>
        <Text>
          {i18n.t("origin.page")}: {page.number + 1} / {page.totalPages}
        </Text>
        <Text>
          {i18n.t("origin.total")}: {page.totalElements}
        </Text>
      </Layout>
      <DataTable.Pagination
        page={page.number}
        numberOfPages={page.totalPages}
        onPageChange={(nextPage) => {
          fetchPage(nextPage, sizeRank[selectedSize.row]);
        }}
      />
      <Layout>
        <Text>{i18n.t("origin.record")}</Text>
        <Select
          style={styles.select}
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

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: "5%",
  },
});
