import tableStyle from "data/tableStyle";
import _ from "lodash";
import React from "react";
import { DataTable, List } from "react-native-paper";
import { getLinkProps, getRenderText } from "utils";

export default ({ links, data = [], rowCallBack, ...props }) => {
  const linkProps = getLinkProps(links);

  if (data == null) return null;

  return data.map((row, index) => {
    return (
      <DataTable.Row key={row.id}>
        <DataTable.Cell style={tableStyle.no} onPress={() => rowCallBack(row)}>
          {renderCell(index + 1)}
        </DataTable.Cell>
        {linkProps.map((linkProp, index) => {
          if (!props.fields[index].visible) return;
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
