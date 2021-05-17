import { IndexPath, Select, SelectItem, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";
import { getRenderText } from "utils";
import i18n from "utils/i18n";

const headerData = [
  "topicCode",
  "semester",
  "major",
  "educationMethod",
  "topicName",
  "guideTeacher",
  "students",
];
const sizeRank = [5, 10, 20, 30, 50, 100];

const renderOption = (title) => <SelectItem key={title} title={title} />;

const TopicTablePaper = ({ data, page, callBack }) => {
  const [selectedSize, setSelectedSize] = React.useState(new IndexPath(0));

  const fetchPage = (newNumber, newSize) => {
    let nextPage = {
      number: newNumber,
      size: newSize,
    };
    callBack(nextPage);
  };

  return (
    <DataTable>
      <DataTable.Header>
        {headerData.map((header) => {
          return (
            <DataTable.Title key={header}>{i18n.t(header)}</DataTable.Title>
          );
        })}
      </DataTable.Header>
      {data.map((row) => {
        return (
          <DataTable.Row key={row.id}>
            {headerData.slice(0, -2).map((field) => {
              let fieldValue = row.topic[field];
              let value = getRenderText(fieldValue);
              return <DataTable.Cell key={field}>{value}</DataTable.Cell>;
            })}
            <DataTable.Cell>{[getRenderText(row.guideTeacher)]}</DataTable.Cell>
            <DataTable.Cell>
              {[getRenderText(row.executeStudent)]}
            </DataTable.Cell>
          </DataTable.Row>
        );
      })}

      <View style={styles.pagination}>
        <View>
          <Text>
            {i18n.t("origin.page")}: {page.number + 1} / {page.totalPages}
          </Text>
          <Text>
            {i18n.t("origin.total")}: {page.totalElements}
          </Text>
        </View>
        <DataTable.Pagination
          page={page.number}
          numberOfPages={page.totalPages}
          onPageChange={(nextPage) => {
            fetchPage(nextPage, sizeRank[selectedSize.row]);
          }}
        />
        <View>
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
            {sizeRank.map(renderOption)}
          </Select>
        </View>
      </View>
    </DataTable>
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

export default TopicTablePaper;
