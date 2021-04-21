import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Layout, Select, SelectItem, IndexPath } from "@ui-kitten/components";

const selectItems = (arrItem) =>
  Array.from(arrItem, (item) => <SelectItem key={item} title={item} />);

const MySelect = ({ value, setValue, ...props }) => {
  return (
    <Select
      {...props}
      value={value}
      onSelect={(index) => setValue(props.arrValue[index - 1])}
    >
      {selectItems(props.arrValue)}
    </Select>
  );
};

const MyMultiSelect = ({ value, setValue, ...props }) => {
  const indexes = Array.from(
    value,
    (item) => new IndexPath(props.arrValue.indexOf(item))
  ).filter((item) => item.row > -1);

  return (
    <Select
      {...props}
      value={value.join(", ")}
      multiSelect={true}
      selectedIndex={indexes}
      onSelect={(arrIndexPath) =>
        setValue(
          Array.from(arrIndexPath, (indexPath) => props.arrValue[indexPath.row])
        )
      }
    >
      {selectItems(props.arrValue)}
    </Select>
  );
};

export { MySelect, MyMultiSelect };
