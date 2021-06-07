import {
  Datepicker,
  IndexPath,
  Select,
  SelectItem
} from "@ui-kitten/components";
import React from "react";
import { getRenderText, toLocalDate } from "utils";
import i18n from "utils/i18n";

export const selectItems = (arrItem, { callBack, ...props }) => {
  return arrItem
    ? Array.from(arrItem, (item, index) => (
        <SelectItem
          key={item}
          title={getRenderText(item)}
          {...props}
          onPressOut={() => {
            if (callBack) callBack(index);
            if (props.onPress) props.onPress();
          }}
        />
      ))
    : null;
};

export const MySelect = ({ callBack, ...props }) => {
  const [indexed, setIndexed] = React.useState(
    new IndexPath(
      props.arrValue
        ?.map((x) => x.id ?? x)
        .indexOf(props.value?.id ?? props.value)
    )
  );

  return (
    <Select
      {...props}
      label={i18n.t(props.label)}
      placeholder={i18n.t(props.placeholder)}
      value={getRenderText(props.arrValue[indexed.row])}
      selectedIndex={indexed.row > -1 ? indexed : null}
      onSelect={(index) => {
        let arrDataReturn = props.arrId ? props.arrId : props.arrValue;
        callBack(arrDataReturn[index - 1]);
        setIndexed(index);
      }}
    >
      {selectItems(props.arrValue, {})}
    </Select>
  );
};

export const MyMultiSelect = ({ callBack, ...props }) => {
  const [indexes, setIndexes] = React.useState(
    props.value
      ? Array.from(
          props.value?.map((x) => x.id ?? x),
          (item) =>
            new IndexPath(props.arrValue?.map((x) => x.id ?? x).indexOf(item))
        ).filter((item) => item.row > -1)
      : null
  );

  return (
    <Select
      {...props}
      label={i18n.t(props.label)}
      placeholder={i18n.t(props.placeholder)}
      value={indexes?.map((x) => getRenderText(props.arrValue[x.row]) + ", ")}
      multiSelect={true}
      selectedIndex={indexes}
      onSelect={(arrIndexPath) => {
        let arrDataReturn = props.arrId ? props.arrId : props.arrValue;
        callBack(
          Array.from(arrIndexPath, (indexPath) => arrDataReturn[indexPath.row])
        );
        setIndexes(arrIndexPath);
      }}
    >
      {selectItems(props.arrValue, {})}
    </Select>
  );
};

export const DatePicker = ({ callBack, ...props }) => {
  const [date, setDate] = React.useState(
    props.value ? new Date(props.value) : null
  );

  return (
    <Datepicker
      date={date}
      {...props}
      onSelect={(nextDate) => {
        setDate(nextDate);
        callBack(toLocalDate(nextDate));
      }}
    />
  );
};
