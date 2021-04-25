import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  Modal,
  Card,
  Input,
  Button,
  Text,
  Layout,
} from "@ui-kitten/components";

import Props from "data/Props";

import MyModal from "components/Modal";
import MyInput from "components/Input";
import { MySelect, MyMultiSelect } from "components/Select";

import BottomCard from "components/BottomCard";
import { PlusIcon } from "components/Icons";

const TopicCreate = (form) => {
  const [teacherCreateVisible, setTeacherCreateVisible] = React.useState(false);

  const setValue = (field, value) => (form[field] = value);

  const selectProps = (field) => {
    return {
      field,
      value: form[field],
      callBack: (value) => setValue(field, value),
      ...Props[field],
    };
  };
  const inputProps = (field) => {
    return {
      value: form[field],
      callBack: (value) => setValue(field, value),
      ...Props[field],
    };
  };
  const rightBtnProps = { appearance: "ghost", accessoryRight: PlusIcon };
  const modalTeacherCreateProps = {
    visible: teacherCreateVisible,
    header: "Create new teacher",
    submit: () => console.log(form),
    cancel: () => setTeacherCreateVisible(false),
    body: () => <Text>asd</Text>,
  };

  return (
    <Layout style={styles.container}>
      <MyModal {...modalTeacherCreateProps} />

      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MySelect {...selectProps("educationMethod")} />
          <MySelect {...selectProps("semester")} />
          <MyInput
            {...inputProps("guideTeacher")}
            accessoryRight={() => (
              <Button
                {...rightBtnProps}
                onPress={() => setTeacherCreateVisible(true)}
              />
            )}
          />
          <MyMultiSelect {...selectProps("majors")} />
        </Layout>
        <Layout style={styles.right}>
          <MyInput {...inputProps("topicCode")} />
          <MyInput {...inputProps("topicName")} />
          <Layout style={{ flexDirection: "row" }}>
            <MySelect {...selectProps("minStudentTake")} style={styles.left} />
            <MySelect {...selectProps("maxStudentTake")} style={styles.right} />
          </Layout>
          <MyInput {...inputProps("students")} />
        </Layout>
      </Layout>
      <Layout style={styles.row}>
        <MyInput {...inputProps("mainTask")} style={styles.left} />
        <MyInput {...inputProps("thesisTask")} style={styles.right} />
      </Layout>
      <MyInput {...inputProps("description")} style={styles.description} />
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
  description: {},
});

export default TopicCreate;
