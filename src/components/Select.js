import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Layout, Select, SelectItem, IndexPath } from "@ui-kitten/components";

const selectItems = (arrItem) =>
  Array.from(arrItem, (item) => <SelectItem key={item} title={item} />);

const MySelect = ({ name, form, callBack, ...props }) => {
  return (
    <Select
      {...props[name]}
      value={form[name]}
      onSelect={(index) => callBack(name, props[name].arrValue[index - 1])}
    >
      {selectItems(props[name].arrValue)}
    </Select>
  );
};

const MyMultiSelect = ({ name, form, callBack, ...props }) => {
  const indexes = Array.from(
    form[name],
    (item) => new IndexPath(props[name].arrValue.indexOf(item))
  ).filter((item) => item.row > -1);

  return (
    <Select
      {...props[name]}
      value={form[name].join(", ")}
      multiSelect={true}
      selectedIndex={indexes}
      onSelect={(arrIndexPath) =>
        callBack(
          name,
          Array.from(
            arrIndexPath,
            (indexPath) => props[name].arrValue[indexPath.row]
          )
        )
      }
    >
      {selectItems(props[name].arrValue)}
    </Select>
  );
};

export { MySelect, MyMultiSelect };
