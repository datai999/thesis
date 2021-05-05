import { Button, Layout } from "@ui-kitten/components";
import TeacherApi from "api/person/TeacherApi";
import StudentCreateProps from "components/form/studentCreateForm/Props";
import TopicCreateProps from "components/form/teacherCreateForm/Props";
import { PlusIcon } from "components/Icons";
import { MyAutocomplete, MyInput } from "components/Input";
import MyModal from "components/Modal";
import { MyMultiSelect, MySelect } from "components/Select";
import Props from "data/Props";
import React from "react";
import { StyleSheet } from "react-native";

const TopicCreate = (form) => {
  const [teacherCreateVisible, setTeacherCreateVisible] = React.useState(false);
  const [studentCreateVisible, setStudentCreateVisible] = React.useState(false);
  const modalTeacherCreateProps = {
    visible: teacherCreateVisible,
    cancel: () => setTeacherCreateVisible(false),
    ...TopicCreateProps,
  };
  const modalStudentCreateProps = {
    visible: studentCreateVisible,
    cancel: () => setStudentCreateVisible(false),
    ...StudentCreateProps,
  };

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
  const rightBtnProps = {
    appearance: "ghost",
    size: "small",
    accessoryRight: PlusIcon,
  };

  const searchTeacher = async (value) => {
    try {
      const response = await TeacherApi.search(value);
      return response.map((teacher) => teacher.name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout style={styles.container}>
      <MyModal {...modalTeacherCreateProps} />
      <MyModal {...modalStudentCreateProps} />

      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MySelect {...selectProps("educationMethod")} />
          <MySelect {...selectProps("semester")} />
          <MyAutocomplete
            {...inputProps("guideTeacher")}
            refreshDataOnChangeText={searchTeacher}
            accessoryRight={() => (
              <Button
                {...rightBtnProps}
                onPress={() => setTeacherCreateVisible(true)}
              />
            )}
          />
          <MyMultiSelect {...selectProps("major")} />
        </Layout>
        <Layout style={styles.right}>
          <MyInput {...inputProps("topicCode")} />
          <MyInput {...inputProps("topicName")} />
          <Layout style={{ flexDirection: "row" }}>
            <MySelect {...selectProps("minStudentTake")} style={styles.left} />
            <MySelect {...selectProps("maxStudentTake")} style={styles.right} />
          </Layout>
          <MyInput
            {...inputProps("students")}
            accessoryRight={() => (
              <Button
                {...rightBtnProps}
                onPress={() => setStudentCreateVisible(true)}
              />
            )}
          />
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
