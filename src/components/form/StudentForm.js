import { Layout, Text } from "@ui-kitten/components";
import StudentApi from "api/person/StudentApi";
import { MyInput } from "components/Input";
import { MySelect } from "components/Select";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { createProps } from "utils";
import i18n from "utils/i18n";

let form = {};

const StudentForm = {
  create: "student.create",
  update: "student.update",
  body: (data) => {
    let header = "student.create";
    if (data != null) {
      form = _.cloneDeep(data);
      header = "student.update";
    } else form = {};
    return <FormLayout header={header} data={data} />;
  },
  submit: (formSubmit = form) => StudentApi.create(formSubmit),
};

const FormLayout = ({ header }) => {
  const propStore = createProps(form);

  return (
    <Layout style={styles.container}>
      <Text style={styles.headerText}>{i18n.t(header)}</Text>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MyInput
            {...propStore.input("name")}
            label="person.name.label"
            placeholder="person.name.placeholder"
          />
          <MySelect
            {...propStore.select("gender")}
            label="person.gender.label"
            placeholder="person.gender.placeholder"
          />
          <MyInput
            {...propStore.inputMail("email", 50)}
            label="person.email.label"
            placeholder="person.email.placeholder"
          />
          <MyInput
            {...propStore.input("phone")}
            label="person.phone.label"
            placeholder="person.phone.placeholder"
          />
        </Layout>
        <Layout style={styles.right}>
          <MyInput
            {...propStore.input("code")}
            label="person.code.label"
            placeholder="person.code.placeholder"
          />
          <MySelect
            {...propStore.select("educationMethod")}
            label="person.educationMethod.label"
            placeholder="person.educationMethod.placeholder"
          />
          <MySelect
            {...propStore.select("major")}
            label="person.major.label"
            placeholder="person.major.placeholder"
          />
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

export default StudentForm;
