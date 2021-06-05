import { IndexPath, Select, SelectItem, Text } from "@ui-kitten/components";
import { TopicForm } from "components/form";
import MyModal from "components/Modal";
import React from "react";
import { StyleSheet, View } from "react-native";
import { DataTable, List } from "react-native-paper";
import { getRenderText, getLinkProps } from "utils";
import i18n from "utils/i18n";

const linkProps = getLinkProps([
  "person.code",
  "person.name",
  "person.gender",
  "person.subjectDepartment",
  "person.degree",
  "person.email",
  "person.phone",
]);

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

const TeacherTable = ({ data, page, callBack }) => {
  const [selectedSize, setSelectedSize] = React.useState(new IndexPath(0));
  const [topicUpdateVisible, setTopicUpdateVisible] = React.useState(false);
  const [currentRow, setCurrenRow] = React.useState(null);

  const modalTopicUpdateProps = {
    ...TopicForm,
    visible: topicUpdateVisible,
    cancel: () => setTopicUpdateVisible(false),
    body: () => TopicForm.body("topic.update", currentRow),
    submit: async () => {
      try {
        let response = await TopicForm.submit();
        let index = data.map((x) => x.id).indexOf(response.id);
        data[index] = response;
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
        {linkProps.map((linkProp) => {
          return (
            <DataTable.Title key={linkProp}>
              <Text>{i18n.t(linkProp.label)}</Text>
            </DataTable.Title>
          );
        })}
      </DataTable.Header>
      {data.map((row) => {
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

export default TeacherTable;
