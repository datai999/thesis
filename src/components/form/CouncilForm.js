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
  submit: (formSubmit = form) => CouncilApi.create(formSubmit),
};
const CouncilLayout = ({ header, ...props }) => {
  const [teacherCreateVisible, setTeacherCreateVisible] = React.useState(false);

  const [data, setData] = React.useState(props.data);
  const [arrRole, setArrRole] = React.useState(Props["councilRole"].arrValue);

  React.useEffect(() => {
    const setDefaultForm = () => {
      let arrRoleValue = Props["councilRole"].arrValue;
      setValue("reserveDate", new Date());
      setValue("startTime", new Date());
      setValue("endTime", new Date());
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
        data={arrRole}
        renderItem={({ item }) => {
          return (
            <Layout>
              <MyAutocomplete
                {...autocompleteProps("councilTeacher")}
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
