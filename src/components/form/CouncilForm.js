import { Layout, List, Text } from "@ui-kitten/components";
import TeacherApi from "api/person/TeacherApi";
import CouncilApi from "api/topic/CouncilApi";
import { TeacherForm } from "components/form";
import { MyAutocomplete, MyInput } from "components/Input";
import MyModal from "components/Modal";
import { DatePickerInput, TimePickerInput } from "components/Picker";
import { MySelect } from "components/Select";
import Props from "data/Props";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { toLocalDate, toLocalTime } from "utils";
import i18n from "utils/i18n";

let form = {};

const CouncilForm = {
  body: (header = "council.create", data) => {
    if (data != null) form = _.cloneDeep(data);
    else form = {};
    return <CouncilLayout header={header} data={data} />;
  },
  submit: (formSubmit = form) => CouncilApi.create(formSubmit),
};
const CouncilLayout = ({ header, ...props }) => {
  const [teacherCreateVisible, setTeacherCreateVisible] = React.useState(false);

  React.useEffect(() => {
    const setDefaultForm = () => {
      let arrRoleValue = Props["councilRole"].arrValue;
      setValue("reserveDate", toLocalDate(new Date()));
      setValue("startTime", toLocalTime(new Date()));
      setValue("endTime", toLocalTime(new Date()));
      setValue("role", arrRoleValue);
      setValue("teacher", Array(arrRoleValue.length).fill(null));
    };
    setDefaultForm();
  }, []);

  const modalTeacherCreateProps = {
    ...TeacherForm,
    visible: teacherCreateVisible,
    cancel: () => setTeacherCreateVisible(false),
  };

  const setValue = (path, value) => {
    _.set(form, path, value);
  };

  const inputProps = (field, path = field) => {
    return {
      value: form[field] || "",
      callBack: (value) => setValue(path, value),
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
      callBack: (value) => {
        let formatValue =
          field == "reserveDate" ? toLocalDate(value) : toLocalTime(value);
        console.log(formatValue);
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

      {/* TODO bug layout reserve date */}
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
