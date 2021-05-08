import { Button, Layout } from "@ui-kitten/components";
import StudentApi from "api/person/StudentApi";
import TeacherApi from "api/person/TeacherApi";
import TopicAssignApi from "api/topic/TopicAssignApi";
import StudentCreateForm from "components/form/StudentCreateForm";
import TeacherCreateForm from "components/form/TeacherCreateForm";
import { PlusIcon } from "components/Icons";
import { MyAutocomplete, MyInput } from "components/Input";
import MyModal from "components/Modal";
import { MyMultiSelect, MySelect } from "components/Select";
import Props from "data/Props";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";

const form = {};

const TopicCreateForm = {
  header: "Create topic",
  body: () => TopicCreateLayout(),
  submit: () => TopicAssignApi.create(form),
};

const TopicCreateLayout = () => {
  const [teacherCreateVisible, setTeacherCreateVisible] = React.useState(false);
  const [studentCreateVisible, setStudentCreateVisible] = React.useState(false);
  const modalTeacherCreateProps = {
    ...TeacherCreateForm,
    visible: teacherCreateVisible,
    cancel: () => setTeacherCreateVisible(false),
  };
  const modalStudentCreateProps = {
    ...StudentCreateForm,
    visible: studentCreateVisible,
    cancel: () => setStudentCreateVisible(false),
  };

  const setValue = (field, basePath, value) => {
    console.log(basePath);
    let path = basePath == "topic" ? basePath + "." + field : basePath;
    _.set(form, path, value);
  };

  const selectProps = (field, path = "topic") => {
    return {
      field,
      value: form[field],
      callBack: (value) => setValue(field, path, value),
      ...Props[field],
    };
  };
  const inputProps = (field, path = "topic") => {
    return {
      value: form[field],
      callBack: (value) => setValue(field, path, value),
      ...Props[field],
    };
  };
  const rightBtnProps = {
    appearance: "ghost",
    size: "small",
    accessoryRight: PlusIcon,
  };

  const searchPerson = async (type, value) => {
    try {
      const response =
        type == "teacher"
          ? await TeacherApi.search(value)
          : await StudentApi.search(value);
      return response.map((person) => person.name);
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
            {...inputProps("guideTeacher", "guideTeacher")}
            refreshDataOnChangeText={(value) => searchPerson("teacher", value)}
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
          <MyAutocomplete
            {...inputProps("students", "executeStudent")}
            refreshDataOnChangeText={(value) => searchPerson("student", value)}
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

export default TopicCreateForm;
