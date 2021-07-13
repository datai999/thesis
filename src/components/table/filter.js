import { Text } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import tableStyle from "data/tableStyle";
import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";
import { getLinkProps, i18n } from "utils";

export default ({ links, propCallback, callback, ...props }) => {
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

  const inputProps = (linkProp) => {
    return {
      placeholder: linkProp.placeholder,
      key: linkProp.api,
      size: "small",
      value: propCallback.filter[linkProp.api],
      style: [tableStyle[linkProp.api?.split(".").pop()], inputStyle.input],
      callBack: (nextValue) => filter(linkProp.api, nextValue),
    };
  };

  return (
    <DataTable.Header>
      <DataTable.Title style={tableStyle.no}>
        <Text category="s1">{i18n.t("origin.filter")}</Text>
      </DataTable.Title>
      {getLinkProps(links).map((linkProp, index) => {
        if (!props.fields[index].visible) return;
        return <MyInput {...inputProps(linkProp)} />;
      })}
    </DataTable.Header>
  );
};
