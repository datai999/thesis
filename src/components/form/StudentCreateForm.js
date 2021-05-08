import { Layout } from "@ui-kitten/components";
import StudentApi from "api/person/StudentApi";
import { MyInput } from "components/Input";
import { MySelect } from "components/Select";
import Props from "data/Props";
import React from "react";
import { StyleSheet } from "react-native";

const form = {};

const StudentCreateForm = {
  header: "Create new student",
  body: () => StudentCreateLayout(),
  submit: () => StudentApi.create(form),
};

const StudentCreateLayout = () => {
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
  return (
    <Layout style={styles.container}>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MyInput {...inputProps("name")} />
          <MyInput {...inputProps("email")} />
          <MyInput {...inputProps("phone")} />
        </Layout>
        <Layout style={styles.right}>
          <MyInput {...inputProps("studentCode")} />
          <MySelect {...selectProps("educationMethod")} />
          <MySelect {...selectProps("major")} />
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default StudentCreateForm;