import { Button, Layout, Text } from "@ui-kitten/components";
import StudentApi from "api/person/StudentApi";
import TeacherApi from "api/person/TeacherApi";
import TopicAssignApi from "api/topic/TopicAssignApi";
import StudentCreateForm from "components/form/StudentCreateForm";
import TeacherCreateForm from "components/form/TeacherCreateForm";
import { PlusIcon } from "components/Icons";
import { MyAutocompleteTag, MyInput } from "components/Input";
import MyModal from "components/Modal";
import { MyMultiSelect, MySelect } from "components/Select";
import Props from "data/Props";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import i18n from "utils/i18n";

const form = {
  guideTeacher: [],
  executeStudent: [],
};

const TopicCreateForm = {
  body: (
    header = "topic.create",
    data,
    setData = (newData) => {
      return;
    }
  ) => TopicCreateLayout(header, data, setData),
  submit: (formSubmit = form) => TopicAssignApi.create(formSubmit),
};

const TopicCreateLayout = (header, data, setData) => {
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
    let path = basePath == "topic" ? basePath + "." + field : basePath;
    _.set(form, path, value);
    let newData = _.set(data, path, value);
    setData(newData);
  };

  const getValue = (field, basePath) => {
    let path = basePath == "topic" ? basePath + "." + field : basePath;
    return _.get(data, path);
  };

  const selectProps = (field, basePath = "topic") => {
    return {
      field,
      callBack: (value) => setValue(field, basePath, value),
      ...Props[field],
      value: getValue(field, basePath),
    };
  };
  const inputProps = (field, basePath = "topic") => {
    return {
      callBack: (value) => setValue(field, basePath, value),
      ...Props[field],
      value: getValue(field, basePath),
    };
  };
  const autocompleteProps = (type) => {
    let field = "guideTeacher";
    let basePath = field;
    if (type != "teacher") {
      field = "students";
      basePath = "executeStudent";
    }
    return {
      ...inputProps(field, basePath),
      refreshDataOnChangeText: (value) => searchPerson(type, value),
      accessoryRight: () => (
        <Button
          appearance="ghost"
          size="small"
          accessoryRight={PlusIcon}
          onPress={() =>
            type == "teacher"
              ? setTeacherCreateVisible(true)
              : setStudentCreateVisible(true)
          }
        />
      ),
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
      <MyModal {...modalStudentCreateProps} />

      <Text style={styles.headerText}>{i18n.t(header)}</Text>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MySelect {...selectProps("educationMethod")} />
          <MySelect {...selectProps("semester")} />
          <MyMultiSelect {...selectProps("major")} />
          <MyAutocompleteTag {...autocompleteProps("teacher")} />
        </Layout>
        <Layout style={styles.right}>
          <MySelect {...selectProps("minStudentTake")} />
          <MySelect {...selectProps("maxStudentTake")} />
          <MyAutocompleteTag {...autocompleteProps("students")} />
          <MyInput {...inputProps("topicCode")} />
        </Layout>
      </Layout>
      <MyInput {...inputProps("topicName")} />
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
  headerText: {
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  description: {},
  tagList: {
    flexDirection: "row",
  },
  tag: {
    marginHorizontal: 2,
  },
});

export default TopicCreateForm;
