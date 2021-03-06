import { MyInput } from "components/Input";
import tableStyle from "data/tableStyle";
import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

export default ({ propCallback, callback, ...props }) => {
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

  const inputProps = (field) => {
    return {
      placeholder: field.placeholder,
      key: field.api,
      size: "small",
      value: propCallback.filter[field.api],
      style: [tableStyle[field.api?.split(".").pop()], inputStyle.input],
      callBack: (nextValue) => filter(field.api, nextValue),
    };
  };

  return (
    <DataTable.Header>
      {props.fields.map((field) => {
        return <MyInput {...inputProps(field)} />;
      })}
    </DataTable.Header>
  );
};
