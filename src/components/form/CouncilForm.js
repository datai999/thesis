import { Layout, List, Text } from "@ui-kitten/components";
import TeacherApi from "api/person/TeacherApi";
import CouncilApi from "api/topic/CouncilApi";
import { MyAutocomplete, MyInput } from "components/Input";
import { DatePickerInputKitten, TimePickerInput } from "components/Picker";
import { MySelect } from "components/Select";
import Props from "data/Props";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { createProps, getRenderText, toLocalDate, toLocalTime } from "utils";
import i18n from "utils/i18n";

let form = {};

const defaultForm = {
  reserveDate: toLocalDate(new Date()),
  startTime: toLocalTime(new Date()),
  endTime: toLocalTime(new Date()),
  role: Props.councilRole.arrValue,
  teacher: Array(Props.councilRole.arrValue.length).fill(null),
};

const CouncilForm = {
  body: (data) => {
    let header = "council.create";
    if (data != null) {
      form = _.cloneDeep(data);
      header = "council.update";
    } else form = defaultForm;
    return <FormLayout header={header} />;
  },
  submit: () => CouncilApi.create(form),
};

const FormLayout = ({ header }) => {
  const propStore = createProps(form);

  const setValue = (path, value) => {
    _.set(form, path, value);
  };

  const inputProps = (field, path = field) => {
    return {
      ...Props[field],
      value: form[field],
      callBack: (value) => setValue(path, value),
    };
  };
  const pickerInputProps = (field) => {
    let selectedDate = new Date();
    if (field == "reserveDate") {
      if (form[field] && form[field] != "undefine")
        selectedDate = new Date(form[field]);
    } else {
      if (form[field] && form[field] != "undefine") {
        if (form.reserveDate && form.reserveDate != "undefine") {
          selectedDate = new Date(form["reserveDate"] + "T" + form[field]);
        } else {
          selectedDate = new Date("1999-05-28T" + form[field]);
        }
      }
    }

    return {
      pickerProps: {
        popperPlacement: "top-start",
        selected: selectedDate,
      },
      inputProps: {
        ...Props[field],
      },
      callBack: (value) => {
        let formatValue =
          field == "reserveDate" ? toLocalDate(value) : toLocalTime(value);
        setValue(field, formatValue);
      },
    };
  };
  const autocompleteProps = (field, path) => {
    return {
      ...inputProps(field, path),
      refreshDataOnChangeText: (value) => searchPerson("teacher", value),
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
      <Text style={styles.headerText}>{i18n.t(header)}</Text>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MySelect {...propStore.select("council.subjectDepartment")} />
          <MyInput {...inputProps("reserveRoom")} />
        </Layout>
        <Layout style={styles.right}>
          <DatePickerInputKitten {...pickerInputProps("reserveDate")} />
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

      <List
        data={Props["councilRole"].arrValue}
        renderItem={({ index, item }) => {
          return (
            <Layout>
              <MyAutocomplete
                {...autocompleteProps(
                  "councilTeacher",
                  "teacher" + "[" + index + "]"
                )}
                label={item.value[i18n.language]}
                value={getRenderText(form.teacher?.[index])}
                onBlur={(submitValue) => {
                  if (submitValue == "") {
                    setValue("teacherId" + "[" + index + "]", null);
                    setValue("teacher" + "[" + index + "]", null);
                  }
                }}
              />
            </Layout>
          );
        }}
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
