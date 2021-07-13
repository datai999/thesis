import { Button, Layout, ViewPager } from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { languageService, loadingService, toastService } from "service";
import { createProps, currentSemester, i18n } from "utils";
import TopicAssign from "./components/topicAssign";
import TopicDescription from "./components/topicDescription";
import TopicInfo from "./components/topicInfo";

let form = {
  topic: { semester: currentSemester() },
  semester: currentSemester(),
};

const submit = () => {
  form.semester = form.topic.semester;
  loadingService.start();
  return TopicAssignApi.create(form)
    .then((response) => {
      loadingService.end();
    })
    .catch((err) => {
      toastService.error(err.response.data.data[0], err);
      loadingService.end();
    });
};

export default () => {
  const [dimensions, setDimensions] = React.useState(Dimensions.get("window"));
  const [language, setLanguage] = React.useState(i18n.languages);
  const [multiLang, setMultiLang] = React.useState(0);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const propStore = createProps(form);

  React.useEffect(() => {
    Dimensions.addEventListener("change", (e) => {
      setDimensions(e.window);
    });
  }, []);

  React.useEffect(() => {
    languageService.listen(setLanguage);
  }, [language]);

  const commonProps = {
    styles: styles,
    propStore: propStore,
    multiLang: multiLang,
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

      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        style={styles.viewPager}
      >
        <TopicInfo {...commonProps} />
        <TopicDescription {...commonProps} />
        <TopicAssign {...commonProps} council={form.council} />
      </ViewPager>

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
  viewPager: {
    height: "90%",
    backgroundColor: "transparent",
  },
  group: {
    flex: 1,
    marginVertical: "1%",
    marginHorizontal: "3%",
    padding: "1%",
  },
  headerGroup: {
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});
