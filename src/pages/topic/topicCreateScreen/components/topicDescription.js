import { Layout, Text } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import React from "react";
import { i18n } from "utils";
import { ScrollView } from "react-native";

export default ({ styles, propStore, multiLang }) => {
  return (
    <Layout style={styles.group}>
      <Text style={styles.headerGroup}>
        {i18n.t("origin.topicDescription")}
      </Text>
      <ScrollView showsVerticalScrollIndicator={true}>
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
