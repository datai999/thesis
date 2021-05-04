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
  const [value, setValue] = React.useState(props.value);
  const [data, setData] = React.useState(props.data);

  const renderOption = (arrItem) => {
    return arrItem
      ? Array.from(arrItem, (item) => <SelectItem key={item} title={item} />)
      : null;
  };

  return (
    <Autocomplete
      {...props}
      value={value}
      onSelect={(index) => setValue(data[index])}
      onChangeText={async (nextValue) => {
        setValue(nextValue);
        if (props.refreshDataOnChangeText) {
          if (nextValue != null && nextValue != "")
            setData(await props.refreshDataOnChangeText(nextValue));
        }
      }}
      onBlur={() => callBack(value)}
    >
      {renderOption(data)}
    </Autocomplete>
  );
};

export { MyInput, MyAutocomplete };
