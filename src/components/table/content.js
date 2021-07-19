import tableStyle from "data/tableStyle";
import _ from "lodash";
import React from "react";
import { DataTable, List } from "react-native-paper";
import { getRenderText } from "utils";

export default ({ data = [], rowCallBack, ...props }) => {
  if (data == null) return null;

  return data.map((row, index) => {
    return (
      <DataTable.Row key={row.id}>
        <DataTable.Cell style={tableStyle.no} onPress={() => rowCallBack(row)}>
          {renderCell(index + 1)}
        </DataTable.Cell>
        {props.fields.map((field) => {
          let fieldValue = _.get(row, field.api);
          return (
            <DataTable.Cell
              style={tableStyle[field.api.split(".").pop()]}
              key={field.api}
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
