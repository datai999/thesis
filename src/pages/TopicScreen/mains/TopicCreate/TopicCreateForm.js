import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Input, Button } from "@ui-kitten/components";

import Props from "data/Props";
import { MySelect, MyMultiSelect } from "components/Select";
import TeacherCreateForm from "components/form/TeacherCreateForm";
import { PlusIcon } from "components/Icons";

const TopicCreateForm = ({ form, callBack, ...props }) => {
  const [teacherCreateVisible, setTeacherCreateVisible] = React.useState(true);

  const selectProps = { form, callBack: setValue, ...Props };
  const rightBtnProps = { appearance: "ghost", accessoryRight: PlusIcon };

  const setValue = (field, value) => {
    form[field] = value;
    callBack();
  };

  return (
    <Layout style={styles.container}>
      <TeacherCreateForm
        visible={teacherCreateVisible}
        callBack={() => setTeacherCreateVisible(false)}
      />
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MySelect {...selectProps} name="educationMethod" />
          <MySelect {...selectProps} name="semester" />
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
          <MyMultiSelect {...selectProps} name="majors" />
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
            <MySelect
              {...selectProps}
              name="minStudentTake"
              style={styles.left}
            />
            <MySelect
              {...selectProps}
              name="maxStudentTake"
              style={styles.right}
            />
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

export default TopicCreateForm;
