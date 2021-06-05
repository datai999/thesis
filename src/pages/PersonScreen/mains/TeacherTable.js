import { TopicForm } from "components/form";
import MyModal from "components/Modal";
import React from "react";
import { DataTable } from "react-native-paper";
import { TableHeader, TableContent, TableBottom } from "components/table";

const arrLink = [
  "person.code",
  "person.name",
  "person.gender",
  "person.subjectDepartment",
  "person.degree",
  "person.email",
  "person.phone",
];

const TeacherTable = ({ data, page, callBack }) => {
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
      <TableHeader arrLink={arrLink} />
      <TableContent arrLink={arrLink} data={data} rowProps={rowProps} />
      <TableBottom page={page} fetchPage={fetchPage} />
    </DataTable>
  );
};

export default TeacherTable;
