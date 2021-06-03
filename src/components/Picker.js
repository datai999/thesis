import { Datepicker as DatePickerKitten } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import i18n from "utils/i18n";

const DatePickerInputKitten = ({ callBack, ...props }) => {
  const [date, setDate] = React.useState(
    props.pickerProps?.selected || new Date()
  );

  return (
    <DatePickerKitten
      date={date}
      placement="top start"
      {...props?.inputProps}
      {...props}
      label={i18n.t(props?.inputProps?.label)}
      onSelect={(nextDate) => {
        setDate(nextDate);
        callBack(nextDate);
      }}
    />
  );
};

const DatePickerInput = ({ callBack, pickerProps, inputProps, ...props }) => {
  const [date, setDate] = React.useState(pickerProps?.selected || new Date());

  const CustomInput = React.forwardRef(
    ({ value, onClick, ...customInputProps }, ref) => (
      <MyInput
        {...customInputProps}
        value={value}
        onClick={onClick}
        onChangeText={(nextValue) => {}}
      />
    )
  );

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      {...pickerProps}
      selected={date}
      {...props}
      onChange={(nextDate) => {
        setDate(nextDate);
        callBack(nextDate);
      }}
      customInput={<CustomInput {...inputProps} />}
    />
  );
};

const TimePickerInput = ({ callBack, pickerProps, inputProps, ...props }) => {
  const datePickerProps = {
    pickerProps: {
      ...pickerProps,
      timeCaption: "Time",
      dateFormat: "h:mm aa",
      showTimeSelect: "showTimeSelect",
      showTimeSelectOnly: "showTimeSelectOnly",
    },
    inputProps: inputProps,
    callBack: callBack,
    ...props,
  };

  return <DatePickerInput {...datePickerProps} />;
};

export { DatePickerInput, TimePickerInput, DatePickerInputKitten };
