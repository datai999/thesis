import { Button, Layout } from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import { MyInput } from "components/Input";
import { MyMultiSelect, MySelect } from "components/Select";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import {
  createProps,
  currentSemester,
  i18n,
  languageService,
  toastHolder,
} from "utils";

let form = { topic: { semester: currentSemester() } };

const submit = () => {
  form.semester = form.topic.semester;
  return TopicAssignApi.create(form).catch((err) =>
    // TODO update message
    toastHolder.error("toast.fail", err)
  );
};

const FormLayout = () => {
  const [language, setLanguage] = React.useState(i18n.languages);
  const [multiLang, setMultiLang] = React.useState(0);

  const propStore = createProps(form);

  React.useEffect(() => {
    languageService.listen(setLanguage);
  }, [language]);

  return (
    <Layout style={styles.container}>
      <Layout style={{ flexDirection: "row" }}>
        <Button
          size="tiny"
          status="primary"
          style={{ margin: 5 }}
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
        style={{ maxHeigh: "50%" }}
        contentContainerStyle={{ marginHorizontal: 24, marginVertical: 15 }}
      >
        <MyInput {...propStore.inputLang("topic.name")} />
        {multiLang > 0 && (
          <MyInput {...propStore.inputToggleLang("topic.name")} />
        )}
        <MySelect {...propStore.select("topic.educationMethod")} />
        <MyInput {...propStore.select("topic.semester")} />
        <MyMultiSelect {...propStore.select("topic.major")} />
        <MyInput {...propStore.input("topic.code")} />
        <MySelect {...propStore.select("topic.minStudentTake")} />
        <MySelect {...propStore.select("topic.maxStudentTake")} />

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
      <Button onPress={submit}>{i18n.t("origin.submit")}</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  left: { flex: 1 },
  right: { flex: 1 },
  tagList: {
    flexDirection: "row",
  },
  tag: {
    marginHorizontal: 2,
  },
});

export default FormLayout;
