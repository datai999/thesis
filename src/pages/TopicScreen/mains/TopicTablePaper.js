import React from "react";
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

const TopicTablePaper = ({ data }) => {
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

      <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={(page) => {
          console.log(page);
        }}
        label="1-2 of 6"
      />
    </DataTable>
  );
};

export default TopicTablePaper;
