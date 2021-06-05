import { Layout, Text } from "@ui-kitten/components";
import TeacherApi from "api/person/TeacherApi";
import { MyInput } from "components/Input";
import { MySelect } from "components/Select";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { createProps } from "utils";
import i18n from "utils/i18n";

let form = {};

const TeacherForm = {
  body: (data) => {
    let header = "teacher.create";
    if (data != null) {
      form = _.cloneDeep(data);
      header = "teacher.update";
    } else form = {};
    return <TeacherLayout header={header} data={data} />;
  },
  submit: (formSubmit = form) => TeacherApi.create(formSubmit),
};

const TeacherLayout = ({ header, ...props }) => {
  const propStore = createProps(form);

  return (
    <Layout style={styles.container}>
      <Text style={styles.headerText}>{i18n.t(header)}</Text>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MyInput {...propStore.input("person.name")} />
          <MyInput {...propStore.input("person.email")} />
          <MyInput {...propStore.input("person.phone")} />
        </Layout>
        <Layout style={styles.right}>
          <MyInput {...propStore.input("person.code")} />
          <MySelect {...propStore.select("person.degree")} />
          <MySelect {...propStore.select("person.subjectDepartment")} />
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

export default TeacherForm;
