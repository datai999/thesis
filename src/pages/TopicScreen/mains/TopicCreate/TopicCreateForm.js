import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Input } from "@ui-kitten/components";
import _ from "lodash";

import Props from "data/Props";
import { MySelect, MyMultiSelect } from "components/Select";

const TopicCreateForm = ({ form, setValue }) => {
  return (
    <Layout style={styles.container}>
      <Layout style={styles.row}>
        <Layout style={styles.left}>
          <MySelect
            {...Props.educationMethod}
            value={form.educationMethod}
            setValue={(value) => setValue("educationMethod", value)}
          />
          <MySelect
            {...Props.semester}
            value={form.semester}
            setValue={(value) => setValue("semester", value)}
          />
          <Input
            {...Props.guideTeacher}
            value={form.guideTeacher}
            onChangeText={(value) => setValue("guideTeacher", value)}
          />
          <MyMultiSelect
            {...Props.majors}
            value={form.majors}
            setValue={(value) => setValue("majors", value)}
          />
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
              {...Props.minStudentTake}
              style={styles.left}
              value={form.minStudentTake}
              setValue={(value) => setValue("minStudentTake", value)}
            />
            <MySelect
              {...Props.maxStudentTake}
              style={styles.right}
              value={form.maxStudentTake}
              setValue={(value) => setValue("maxStudentTake", value)}
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
