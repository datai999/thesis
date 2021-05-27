import { MyInput } from "components/Input";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = ({ callback, pickerProps, inputProps, ...props }) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
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

const TimePickerInput = ({ callback, pickerProps, inputProps, ...props }) => {
  const [date, setDate] = React.useState(new Date());

  return (
    <DatePicker
      timeCaption="Time"
      dateFormat="h:mm aa"
      {...pickerProps}
      showTimeSelect
      showTimeSelectOnly
      selected={date}
      onChange={(nextDate) => {
        setDate(nextDate);
        callback(nextDate);
      }}
      customInput={<MyInput {...inputProps} />}
    />
  );
};

export { DatePickerInput, TimePickerInput };
