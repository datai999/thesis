import { Layout, Text } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import { MyMultiSelect, MySelect } from "components/Select";
import React from "react";
import { ScrollView } from "react-native";
import { i18n } from "utils";

export default ({ styles, propStore, multiLang }) => {
  return (
    <Layout style={styles.group}>
      <Text style={styles.headerGroup}>{i18n.t("origin.topicInfo")}</Text>
      <ScrollView showsVerticalScrollIndicator={true}>
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
      </ScrollView>
    </Layout>
  );
};
