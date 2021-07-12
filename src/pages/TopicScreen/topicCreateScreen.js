import { Button, Layout, Text } from "@ui-kitten/components";
import StudentApi from "api/person/StudentApi";
import TeacherApi from "api/person/TeacherApi";
import TopicAssignApi from "api/topic/TopicAssignApi";
import CouncilForm from "components/form/CouncilForm";
import { MyAutocompleteTag, MyInput } from "components/Input";
import MyModal from "components/Modal";
import { MyMultiSelect, MySelect } from "components/Select";
import constData from "data/constData";
import React from "react";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import {
  createProps,
  currentSemester,
  i18n,
  languageService,
  toastHolder,
} from "utils";

let form = {
  topic: { semester: currentSemester() },
  semester: currentSemester(),
};

const submit = () => {
  form.semester = form.topic.semester;
  return TopicAssignApi.create(form).catch((err) => {
    toastHolder.error(err.response.data.data[0], err);
  });
};

const FormLayout = () => {
  const [dimensions, setDimensions] = React.useState(Dimensions.get("window"));
  const [language, setLanguage] = React.useState(i18n.languages);
  const [multiLang, setMultiLang] = React.useState(0);
  const [councilVisible, setCouncilVisible] = React.useState(false);

  const propStore = createProps(form);

  React.useEffect(() => {
    Dimensions.addEventListener("change", (e) => {
      setDimensions(e.window);
    });
  }, []);

  React.useEffect(() => {
    languageService.listen(setLanguage);
  }, [language]);

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
    <Layout style={styles.container}>
      <Layout style={{ flexDirection: "row" }}>
        <Button
          size="tiny"
          status="primary"
          onPress={() => setMultiLang(multiLang + 1)}
          accessoryRight={() => (
            <IconButton
              icon="translate"
              color="white"
              size={13}
              style={{ margin: 0 }}
              onPress={() => setMultiLang(multiLang + 1)}
            />
          )}
        >
          {i18n.t("origin.multiLanguage")}
        </Button>
      </Layout>

      <ScrollView
        showsVerticalScrollIndicator={dimensions.width > 1000}
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          { flexDirection: dimensions.width > 1000 ? "row" : "column" },
        ]}
      >
        <Layout style={styles.group}>
          <Text style={styles.headerGroup}>{i18n.t("origin.topicInfo")}</Text>
          <MyInput {...propStore.inputLang("topic.name")} />
          {multiLang > 0 && (
            <MyInput {...propStore.inputToggleLang("topic.name")} />
          )}
          <MySelect {...propStore.select("topic.educationMethod")} />
          <MyInput {...propStore.select("topic.semester")} />
          <MyMultiSelect {...propStore.select("topic.major")} />
          <MyInput {...propStore.input("topic.code")} />
          <Layout
            style={{ justifyContent: "space-evenly", flexDirection: "row" }}
          >
            <MySelect {...propStore.select("topic.minStudentTake")} />
            <MySelect {...propStore.select("topic.maxStudentTake")} />
          </Layout>
        </Layout>
        <Layout style={styles.group}>
          <Text style={styles.headerGroup}>
            {i18n.t("origin.topicDescription")}
          </Text>
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
        </Layout>
        <Layout style={styles.group}>
          <Text style={styles.headerGroup}>{i18n.t("origin.topicAssign")}</Text>
          <MyInput {...propStore.select("topicAssign.semester")} />
          <MySelect
            {...propStore.select("topicAssign.status")}
            arrValue={constData.topicStatus.arrValue}
          />
          <MyAutocompleteTag
            {...propStore.inputSearch("topicAssign.executeStudent", StudentApi)}
          />

          <MyAutocompleteTag
            {...propStore.inputSearch("topicAssign.guideTeacher", TeacherApi)}
          />
          <MyAutocompleteTag
            {...propStore.inputSearch("topicAssign.reviewTeacher", TeacherApi)}
          />
          <MyModal {...modalCouncilProps} />
          <Button
            style={{ marginTop: 22 }}
            appearance="outline"
            onPress={() => {
              setCouncilVisible(true);
            }}
          >
            {() => {
              if (form?.council == null) return i18n.t("council.create");
              return i18n.t("council.update");
            }}
          </Button>
        </Layout>
      </ScrollView>
      <Button onPress={submit}>{i18n.t("origin.submit")}</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: "1%",
    maxHeight: "95%",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  scroll: {
    minWidth: "90%",
    maxHeight: "100%",
    marginVertical: "1%",
    backgroundColor: "transparent",
  },
  scrollContent: {
    marginVertical: 15,
    justifyContent: "space-evenly",
  },
  group: {
    minWidth: "30%",
    maxWidth: "90%",
    padding: "1%",
    // backgroundColor: "transparent",
  },
  headerGroup: {
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});

export default FormLayout;
