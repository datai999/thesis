import { IndexPath, Select, SelectItem, Text } from "@ui-kitten/components";
import TopicCreateForm from "components/form/TopicCreateForm";
import MyModal from "components/Modal";
import React from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, List } from "react-native-paper";
import { getRenderText } from "utils";
import i18n from "utils/i18n";

const headerData = {
  topicCode: {},
  semester: {},
  major: {},
  educationMethod: {},
  topicName: {},
  guideTeacher: {},
  students: {},
};

const sizeRank = [5, 10, 20, 30, 50, 100];

const renderOption = (title) => <SelectItem key={title} title={title} />;

const reducerLastName = (accumulator, currentValue) =>
  accumulator + ", " + currentValue.split(" ").slice(-1).join();

const renderCell = (data) => {
  let renderValue = getRenderText(data);
  if (Array.isArray(renderValue)) {
    return (
      <List.Accordion title={renderValue.reduce(reducerLastName, "").slice(2)}>
        {renderValue?.map((value) => {
          return <List.Item key={value} title={value} />;
        })}
      </List.Accordion>
    );
  }
  return renderValue;
};

const TopicTablePaper = ({ data, page, callBack }) => {
  const [selectedSize, setSelectedSize] = React.useState(new IndexPath(0));
  const [topicUpdateVisible, setTopicUpdateVisible] = React.useState(false);
  const [currentRow, setCurrenRow] = React.useState(null);

  const modalTopicUpdateProps = {
    ...TopicCreateForm,
    header: "topic.update",
    visible: topicUpdateVisible,
    cancel: () => setTopicUpdateVisible(false),
    body: () => TopicCreateForm.body(currentRow),
    submit: async () => {
      try {
        let response = await TopicCreateForm.submit(currentRow);
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  };

  const rowProps = (row) => {
    return {
      onPress: () => {
        setCurrenRow(row);
        setTopicUpdateVisible(true);
      },
    };
  };

  const fetchPage = (newNumber, newSize) => {
    let nextPage = {
      number: newNumber,
      size: newSize,
    };
    callBack(nextPage);
  };

  return (
    <DataTable>
      <MyModal {...modalTopicUpdateProps} />
      <DataTable.Header>
        {Object.keys(headerData).map((header) => {
          return (
            <DataTable.Title key={header}>
              <Text>{i18n.t(header)}</Text>
            </DataTable.Title>
          );
        })}
      </DataTable.Header>
      {data.map((row) => {
        if (row.topic == null) return;
        return (
          <DataTable.Row key={row.id} {...rowProps(row)}>
            {Object.keys(headerData)
              .slice(0, -2)
              .map((field) => {
                let fieldValue = row.topic[field];
                return (
                  <DataTable.Cell key={field} {...rowProps(row)}>
                    {renderCell(fieldValue)}
                  </DataTable.Cell>
                );
              })}
            <DataTable.Cell>{renderCell(row.guideTeacher)}</DataTable.Cell>
            <DataTable.Cell>{renderCell(row.executeStudent)}</DataTable.Cell>
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
