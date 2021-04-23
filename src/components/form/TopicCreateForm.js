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

import MyModal from "components/Modal";
import Props from "data/Props";
import { MySelect, MyMultiSelect } from "components/Select";
import BottomCard from "components/BottomCard";
import { PlusIcon } from "components/Icons";

const TeacherCreateForm = (form) => {
  const [teacherCreateVisible, setTeacherCreateVisible] = React.useState(true);

  const selectProps = (field) => {
    return {
      field,
      value: form[field],
      callBack: (value) => (form[field] = value),
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
          <Input
            {...Props.guideTeacher}
            value={form.guideTeacher}
            accessoryRight={() => (
              <Button
                {...rightBtnProps}
                onPress={() => setTeacherCreateVisible(true)}
              />
            )}
            onChangeText={(value) => setValue("guideTeacher", value)}
          />
          <MyMultiSelect {...selectProps("majors")} />
        </Layout>
        <Layout style={styles.right}>
          <Input
            {...Props.topicCode}
            value={form.topicCode}
            onChangeText={(value) => setValue("topicCode", value)}
          />
          <Input
            {...Props.topicName}
            value={form.topicName}
            onChangeText={(value) => setValue("topicName", value)}
          />
          <Layout style={{ flexDirection: "row" }}>
            <MySelect {...selectProps("minStudentTake")} style={styles.left} />
            <MySelect {...selectProps("maxStudentTake")} style={styles.right} />
          </Layout>
          <Input
            {...Props.students}
            value={form.students}
            onChangeText={(value) => setValue("students", value)}
          />
        </Layout>
      </Layout>
      <Layout style={styles.row}>
        <Input
          {...Props.mainTask}
          style={styles.left}
          value={form.mainTask}
          onChangeText={(value) => setValue("mainTask", value)}
        />
        <Input
          {...Props.thesisTask}
          style={styles.right}
          value={form.thesisTask}
          onChangeText={(value) => setValue("thesisTask", value)}
        />
      </Layout>
      <Input
        {...Props.description}
        style={styles.description}
        value={form.description}
        onChangeText={(value) => setValue("description", value)}
      />
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

export default TeacherCreateForm;
