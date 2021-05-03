import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import React from "react";

const selectItems = (arrItem) => {
  return arrItem
    ? Array.from(arrItem, (item) => <SelectItem key={item} title={item} />)
    : null;
};

const MySelect = ({ field, callBack, ...props }) => {
  const [indexed, setIndexed] = React.useState(
    new IndexPath(props.arrValue?.indexOf(props.value))
  );

  return (
    <Select
      {...props}
      value={props.arrValue && props.arrValue[indexed.row]}
      selectedIndex={indexed.row > -1 ? indexed : null}
      onSelect={(index) => {
        callBack(props.arrValue[index - 1]);
        setIndexed(index);
      }}
    >
      {selectItems(props.arrValue)}
    </Select>
  );
};

const MyMultiSelect = ({ field, callBack, ...props }) => {
  const indexes = Array.from(
    props.value,
    (item) => new IndexPath(props.arrValue.indexOf(item))
  ).filter((item) => item.row > -1);

  return (
    <Select
      {...props}
      value={props.value.join(", ")}
      multiSelect={true}
      selectedIndex={indexes}
      onSelect={(arrIndexPath) =>
        callBack(
          name,
          Array.from(arrIndexPath, (indexPath) => props.arrValue[indexPath.row])
        )
      }
    >
      {selectItems(props.arrValue)}
    </Select>
  );
};

export { MySelect, MyMultiSelect };
