import { Layout } from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import { MyInput } from "components/Input";
import { MyMultiSelect, MySelect } from "components/Select";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { createProps, currentSemester, toastHolder } from "utils";

let form = { topic: { semester: currentSemester() } };

const TopicForm = () => {
  return {
    create: "topic.create",
    update: "topic.update",
    submit: () => {
      form.semester = form.topic.semester;
      return TopicAssignApi.create(form).catch((err) =>
        // TODO update message
        toastHolder.error("toast.fail", err)
      );
    },
  };
};

const FormLayout = () => {
  const [multiLang, setMultiLang] = React.useState(0);

  const propStore = createProps(form);

  return (
    <Layout style={{ flex: 1, maxHeight: "70%", backgroundColor: "blue" }}>
      <Layout style={{ flexDirection: "row" }}>
        <IconButton
          icon="translate"
          onPress={() => setMultiLang(multiLang + 1)}
        />
      </Layout>
      <ScrollView
        style={{ maxHeight: "70%", backgroundColor: "red" }}
        contentContainerStyle={{ paddingHorizontal: "20%" }}
      >
        <MyInput {...propStore.inputLang("topic.name")} />
        {multiLang > 0 && (
          <MyInput {...propStore.inputToggleLang("topic.name")} />
        )}

        <Layout style={styles.row}>
          <Layout style={styles.left}>
            <MySelect {...propStore.select("topic.educationMethod")} />
            <MyInput {...propStore.select("topic.semester")} />
            <MyMultiSelect {...propStore.select("topic.major")} />
          </Layout>
          <Layout style={styles.right}>
            <MyInput {...propStore.input("topic.code")} />
            <MySelect {...propStore.select("topic.minStudentTake")} />
            <MySelect {...propStore.select("topic.maxStudentTake")} />
          </Layout>
        </Layout>

        <MyInput {...propStore.inputLang("topic.description")} />
        {multiLang > 0 && (
          <MyInput {...propStore.inputToggleLang("topic.description")} />
        )}
        <MyInput {...propStore.inputLang("topic.topicTask")} />
        {multiLang > 0 && (
          <MyInput {...propStore.inputToggleLang("topic.topicTask")} />
        )}
        <MyInput {...propStore.inputLang("topic.thesisTask")} />
        {multiLang > 0 && (
          <MyInput {...propStore.inputToggleLang("topic.thesisTask")} />
        )}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
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
    marginLeft: "25%",
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

export default FormLayout;
