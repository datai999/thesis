import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Input } from "@ui-kitten/components";
import _ from "lodash";

import Constants from "components/Constants";
import { MySelect, MyMultiSelect } from "components/Select";

const TopicCreateForm = ({ form, setValue }) => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MySelect
            {...Constants.educationMethod}
            value={form.educationMethod}
            setValue={(value) => setValue("educationMethod", value)}
          />
          <MySelect
            {...Constants.semester}
            value={form.semester}
            setValue={(value) => setValue("semester", value)}
          />
          <Input
            {...Constants.guideTeacher}
            value={form.guideTeacher}
            onChangeText={(value) => setValue("guideTeacher", value)}
          />
          <MyMultiSelect
            {...Constants.majors}
            value={form.majors}
            setValue={(value) => setValue("majors", value)}
          />
        </Layout>
        <Layout style={styles.right}>
          <Input
            {...Constants.topicCode}
            value={form.topicCode}
            onChangeText={(value) => setValue("topicCode", value)}
          />
          <Input
            {...Constants.topicName}
            value={form.topicName}
            onChangeText={(value) => setValue("topicName", value)}
          />
          <Layout style={{ flexDirection: "row" }}>
            <MySelect
              {...Constants.minStudentTake}
              style={styles.left}
              value={form.minStudentTake}
              setValue={(value) => setValue("minStudentTake", value)}
            />
            <MySelect
              {...Constants.maxStudentTake}
              style={styles.right}
              value={form.maxStudentTake}
              setValue={(value) => setValue("maxStudentTake", value)}
            />
          </Layout>
          <Input
            {...Constants.students}
            value={form.students}
            onChangeText={(value) => setValue("students", value)}
          />
        </Layout>
      </Layout>
      <Layout style={styles.row}>
        <Input
          {...Constants.mainTask}
          style={styles.left}
          value={form.mainTask}
          onChangeText={(value) => setValue("mainTask", value)}
        />
        <Input
          {...Constants.thesisTask}
          style={styles.right}
          value={form.thesisTask}
          onChangeText={(value) => setValue("thesisTask", value)}
        />
      </Layout>
      <Input
        {...Constants.description}
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
