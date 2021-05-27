import { MyInput } from "components/Input";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = ({ callback, pickerProps, inputProps, ...props }) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <DatePicker
      {...pickerProps}
      selected={date}
      onChange={(nextDate) => {
        setDate(nextDate);
        callback(nextDate);
      }}
      customInput={<MyInput {...inputProps} />}
    />
  );
};

export { DatePickerInput };
