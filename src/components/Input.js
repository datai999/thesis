import { Autocomplete, Input, SelectItem } from "@ui-kitten/components";
import React from "react";

const MyInput = ({ value, callBack, ...props }) => {
  const [currentValue, setCurrentValue] = React.useState(value);
  return (
    <Input
      {...props}
      onChangeText={(nextValue) => {
        callBack(nextValue);
        setCurrentValue(nextValue);
      }}
      onBlur={() => {
        if (props.onBlur) return props.onBlur(currentValue);
        return null;
      }}
    />
  );
};

const MyAutocomplete = ({ callBack, ...props }) => {
  const [data, setData] = React.useState(props.data ?? []);
  const [indexed, setIndexed] = React.useState(-1);

  const renderOption = (arrItem) => {
    return arrItem?.map((item) => {
      let textRender = getRenderText(item);
      return <SelectItem key={item} title={textRender} />;
    });
  };

  function getRenderText(obj) {
    if (obj == null) return null;
    switch (typeof obj) {
      case "string":
      case "number":
        return obj;
      case "object":
        return obj?.name ?? obj?.value;
      default:
        return null;
    }
  }

  return (
    <Autocomplete
      {...props}
      value={getRenderText(data[indexed])}
      onSelect={(number) => {
        setIndexed(number);
        callBack(data[number]);
      }}
      onChangeText={async (nextValue) => {
        if (props.refreshDataOnChangeText) {
          if (nextValue != null && nextValue != "")
            setData(await props.refreshDataOnChangeText(nextValue));
        }
      }}
    >
      {renderOption(data)}
    </Autocomplete>
  );
};

export { MyInput, MyAutocomplete };
