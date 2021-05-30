import { Button, Layout, List, Text } from "@ui-kitten/components";
import { TeacherForm } from "components/form";
import { PlusIcon } from "components/Icons";
import { MyAutocompleteTag, MyInput } from "components/Input";
import MyModal from "components/Modal";
import { DatePickerInput, TimePickerInput } from "components/Picker";
import { MySelect } from "components/Select";
import Props from "data/Props";
import _ from "lodash";
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
  submit: (formSubmit = form) => console.log(formSubmit),
};
const CouncilLayout = ({ header, ...props }) => {
  const [teacherCreateVisible, setTeacherCreateVisible] = React.useState(false);

  const [data, setData] = React.useState(props.data);
  const [arrRole, setArrRole] = React.useState(Props["councilRole"].arrValue);

  const modalTeacherCreateProps = {
    ...TeacherForm,
    visible: teacherCreateVisible,
    cancel: () => setTeacherCreateVisible(false),
  };

  const setValue = (field, value) => (form[field] = value);

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
  const pickerInputProps = (field) => {
    return {
      pickerProps: {
        popperPlacement: "top-start",
      },
      inputProps: {
        ...Props[field],
      },
      callBack: (value) => setValue(field, value),
    };
  };
  const autocompleteProps = (field) => {
    let basePath = field;
    return {
      ...inputProps(field),
      refreshDataOnChangeText: (value) => searchPerson("teacher", value),
      accessoryRight: () => (
        <Button
          appearance="ghost"
          size="small"
          accessoryRight={PlusIcon}
          onPress={() => setTeacherCreateVisible(true)}
        />
      ),
    };
  };
  const searchPerson = async (type, value) => {
    try {
      return type == "teacher"
        ? await TeacherApi.search(value)
        : await StudentApi.search(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout style={styles.container}>
      <MyModal {...modalTeacherCreateProps} />

      <Text style={styles.headerText}>{i18n.t(header)}</Text>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MySelect {...selectProps("subjectDepartment")} />
          <MyInput {...inputProps("reserveRoom")} />
        </Layout>
        <Layout style={styles.right}>
          <DatePickerInput {...pickerInputProps("reserveDate")} />
          <Layout style={styles.row}>
            <Layout style={styles.left}>
              <TimePickerInput {...pickerInputProps("startTime")} />
            </Layout>
            <Layout style={styles.right}>
              <TimePickerInput {...pickerInputProps("endTime")} />
            </Layout>
          </Layout>
        </Layout>
      </Layout>

      <Layout>
        <List
          data={arrRole}
          renderItem={({ item }) => {
            let role = item;
            let roleProps = _.cloneDeep(selectProps("councilRole"));
            _.set(roleProps, "value.id", role.id);

            return (
              <Layout style={styles.row}>
                <Layout style={styles.left}>
                  <MySelect {...roleProps} />
                </Layout>
                <Layout style={styles.right}>
                  <MyAutocompleteTag {...autocompleteProps("councilTeacher")} />
                </Layout>
              </Layout>
            );
          }}
        />
      </Layout>

      <Button
        appearance="ghost"
        size="small"
        accessoryRight={PlusIcon}
        // onPress={() => {}}
      />
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
