import React from "react";
import { Input } from "@ui-kitten/components";

const MyInput = ({ value, callBack, ...props }) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Input
      {...props}
      onChangeText={(nextValue) => {
        callBack(nextValue);
        setToggle(!toggle);
      }}
    />
  );
};

export default MyInput;
