import { Layout, Text } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import { DatePickerInput } from "components/Picker";
import { MySelect } from "components/Select";
import Props from "data/Props";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { StyleSheet } from "react-native";
import i18n from "utils/i18n";

let form = {};

const CouncilForm = {
  body: (header = "council.create", data) => {
    if (data != null) form = _.cloneDeep(data);
    else form = {};
    return <CouncilLayout header={header} data={data} />;
  },
  submit: (formSubmit = form) => TopicAssignApi.create(formSubmit),
};
const CouncilLayout = ({ header, ...props }) => {
  const setValue = (field, value) => (form[field] = value);
  const [data, setData] = React.useState(props.data);

  const inputProps = (field) => {
    return {
      value: form[field],
      callBack: (value) => setValue(field, value),
      ...Props[field],
    };
  };
  const selectProps = (field) => {
    return {
      field,
      value: form[field],
      callBack: (value) => setValue(field, value),
      ...Props[field],
    };
  };
  const pickerProps = (field) => {
    return {
      pickerProps: {
        popperPlacement: "top-start",
        dateFormat: "dd/MM/yyyy",
      },
      inputProps: {
        ...Props[field],
      },
    };
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.headerText}>{i18n.t(header)}</Text>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MySelect {...selectProps("subjectDepartment")} />
          <MyInput {...inputProps("reserveRoom")} />
        </Layout>
        <Layout style={styles.right}>
          <DatePickerInput {...pickerProps("reserveDate")} />
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  left: {
    flex: 1,
    marginRight: 10,
  },
  right: {
    flex: 1,
    marginLeft: 10,
  },
  headerText: {
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});

export default CouncilForm;
