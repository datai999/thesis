import { Input } from "@ui-kitten/components";
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

export default MyInput;
