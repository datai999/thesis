import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Text, Layout } from "@ui-kitten/components";

import Props from "data/Props";
import MyInput from "components/Input";
import { MySelect } from "components/Select";

const TeacherCreateLayout = (form) => {
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
          <MySelect {...selectProps("degree")} />
          <MySelect {...selectProps("subjectDepartment")} />
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

export default TeacherCreateLayout;
