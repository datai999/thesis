import { Button, Layout, ViewPager } from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  PeopleIcon,
  RefreshIcon,
} from "components/icons";
import _ from "lodash";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import {
  languageService,
  loadingService,
  navService,
  propsService,
  toastService,
} from "service";
import { currentSemester, i18n } from "utils";
import TopicDescription from "./components/topicDescription";
import TopicInfo from "./components/topicInfo";

const defaultForm = {
  topic: { semester: currentSemester(), minStudentTake: 1, maxStudentTake: 3 },
  semester: currentSemester(),
};
let form = _.cloneDeep(defaultForm);

const submit = () => {
  loadingService.start();
  return TopicAssignApi.create(form)
    .then((response) => {
      loadingService.end();
      toastService.success("toast.topic.create.success");
      navService.navigate("topic", { screen: "topicTable" });
    })
    .catch((err) => {
      toastService.error(err.response.data.data[0], err);
      loadingService.end();
    });
};

export default ({ route = { params: null } }) => {
  const [dimensions, setDimensions] = React.useState(Dimensions.get("window"));
  const [language, setLanguage] = React.useState(i18n.languages);
  const [multiLang, setMultiLang] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [refresh, setRefresh] = React.useState(false);

  form = route.params ?? form;
  let propsStore = propsService.createPropsStore(form);

  let commonProps = {
    styles,
    propsStore,
    multiLang,
  };

  const reset = () => {
    route.params = null;
    form = _.cloneDeep(defaultForm);
    setMultiLang(0);
    setSelectedIndex(0);
    setRefresh(!refresh);
  };

  React.useEffect(() => {
    Dimensions.addEventListener("change", (e) => {
      setDimensions(e.window);
    });
  }, []);

  React.useEffect(() => {
    languageService.onNextState(setLanguage);
  }, [language]);

  return (
    <Layout style={styles.container}>
      <Layout style={styles.headerBtn}>
        <Button
          {...commonPropsTopBtn}
          onPress={reset}
          accessoryRight={RefreshIcon}
        >
          {i18n.t("origin.reset.origin")}
        </Button>
        <Button
          {...commonPropsTopBtn}
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
        <Button
          {...commonPropsTopBtn}
          onPress={() =>
            navService.navigate("topic", {
              screen: "topicAssign",
              params: propsStore.form.topic,
            })
          }
          accessoryRight={PeopleIcon}
        >
          {i18n.t("origin.topicAssign.origin")}
        </Button>
      </Layout>

      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          if (index) setSelectedIndex(index);
        }}
        style={styles.viewPager}
      >
        <TopicInfo {...commonProps} />
        <TopicDescription {...commonProps} />
      </ViewPager>

      <Layout style={styles.bottomBtn}>
        {selectedIndex < 1 && (
          <Button
            status="control"
            appearance="outline"
            accessoryRight={ArrowForwardIcon}
            onPress={() => setSelectedIndex(selectedIndex + 1)}
          >
            {dimensions.width > 700 && i18n.t("origin.topicDescription")}
          </Button>
        )}
        {selectedIndex == 1 && (
          <Button onPress={() => submit()}>{i18n.t("origin.submit")}</Button>
        )}
        {selectedIndex > 0 && (
          <Button
            status="control"
            appearance="outline"
            accessoryLeft={ArrowBackIcon}
            onPress={() => setSelectedIndex(selectedIndex - 1)}
          >
            {dimensions.width > 700 && i18n.t("origin.topicInfo.origin")}
          </Button>
        )}
      </Layout>
    </Layout>
  );
};

const commonPropsTopBtn = {
  style: { marginHorizontal: 5 },
  size: "tiny",
  status: "primary",
};

const styles = StyleSheet.create({
  container: {
    marginVertical: "1%",
    maxHeight: "95%",
    backgroundColor: "transparent",
  },
  headerBtn: {
    marginHorizontal: "3%",
    backgroundColor: "transparent",
    flexDirection: "row",
  },
  viewPager: {
    height: "90%",
    backgroundColor: "transparent",
  },
  bottomBtn: {
    marginHorizontal: "3%",
    backgroundColor: "transparent",
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
  },
  group: {
    flex: 1,
    marginVertical: "1%",
    marginHorizontal: "3%",
    paddingHorizontal: "3%",
  },
  headerGroup: {
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});
