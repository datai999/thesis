import { Button, Layout, Text } from "@ui-kitten/components";
import StudentApi from "api/person/StudentApi";
import TeacherApi from "api/person/TeacherApi";
import TopicAssignApi from "api/topic/TopicAssignApi";
import CouncilForm from "components/form/CouncilForm";
import { MyAutocompleteTag, MyInput } from "components/Input";
import MyModal from "components/MyModal";
import { MyMultiSelect, MySelect } from "components/Select";
import _ from "lodash";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { toastService } from "service";
import { createProps, currentSemester, i18n } from "utils";

let form = {};

const TopicForm = {
  create: "topic.create",
  update: "topic.update",
  body: (data) => {
    let header = "topic.create";
    if (data != null) {
      form = _.cloneDeep(data);
      header = "topic.update";
    } else form = { topic: { semester: currentSemester() } };
    return <FormLayout header={header} />;
  },
  submit: () => {
    form.semester = form.topic.semester;
    return TopicAssignApi.create(form).catch((err) =>
      // TODO update message
      toastService.error("toast.fail", err)
    );
  },
};

const FormLayout = ({ header }) => {
  const [councilVisible, setCouncilVisible] = React.useState(false);
  const [multiLang, setMultiLang] = React.useState(0);

  const propStore = createProps(form);

  const modalCouncilProps = {
    ...CouncilForm,
    visible: councilVisible,
    cancel: () => setCouncilVisible(false),
    body: () => CouncilForm.body(form.council),
    submit: async () => {
      try {
        let response = await CouncilForm.submit();
        form.council = response;
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  };

  return (
    <Layout style={{ flex: 1 }}>
      <MyModal {...modalCouncilProps} />

      <Layout style={{ flexDirection: "row" }}>
        <IconButton
          icon="translate"
          onPress={() => setMultiLang(multiLang + 1)}
        />
        <Text style={styles.headerText}>{i18n.t(header)}</Text>
      </Layout>
      <ScrollView
        style={{ maxHeight: "100%" }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
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
            <MyAutocompleteTag
              {...propStore.inputSearch("topicAssign.guideTeacher", TeacherApi)}
            />
            <MyAutocompleteTag
              {...propStore.inputSearch(
                "topicAssign.reviewTeacher",
                TeacherApi
              )}
            />
          </Layout>
          <Layout style={styles.right}>
            <MyInput {...propStore.input("topic.code")} />
            <MySelect {...propStore.select("topic.minStudentTake")} />
            <MySelect {...propStore.select("topic.maxStudentTake")} />
            <MyAutocompleteTag
              {...propStore.inputSearch(
                "topicAssign.executeStudent",
                StudentApi
              )}
            />
            <Button
              style={{ marginTop: 22 }}
              appearance="outline"
              onPress={() => {
                setCouncilVisible(true);
              }}
            >
              {i18n.t(form.council ? "council.update" : "council.create")}
            </Button>
          </Layout>
        </Layout>

        <MyInput {...propStore.inputLang("topic.topicTask")} />
        {multiLang > 0 && (
          <MyInput {...propStore.inputToggleLang("topic.topicTask")} />
        )}
        <MyInput {...propStore.inputLang("topic.thesisTask")} />
        {multiLang > 0 && (
          <MyInput {...propStore.inputToggleLang("topic.thesisTask")} />
        )}

        <MyInput {...propStore.inputLang("topic.description")} />
        {multiLang > 0 && (
          <MyInput {...propStore.inputToggleLang("topic.description")} />
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

export default TopicForm;
