import { Layout, Text } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import { MyMultiSelect, MySelect } from "components/Select";
import React from "react";
import { ScrollView } from "react-native";
import { i18n } from "utils";

export default ({ styles, propsStore, multiLang }) => {
  return (
    <Layout style={styles.group}>
      <Text style={styles.headerGroup}>
        {i18n.t("origin.topicInfo.origin")}
      </Text>
      <ScrollView showsVerticalScrollIndicator={true}>
        <MyInput {...propsStore.inputLang("topic.name")} />
        {multiLang > 0 && (
          <MyInput {...propsStore.inputToggleLang("topic.name")} />
        )}
        <MyInput {...propsStore.input("topic.code")} />
        <MySelect {...propsStore.select("topic.educationMethod")} />
        <MyInput {...propsStore.select("topic.semester")} />
        <MyMultiSelect {...propsStore.select("topic.major")} />
        <Layout
          style={{ justifyContent: "space-evenly", flexDirection: "row" }}
        >
          <MySelect {...propsStore.select("topic.minStudentTake")} />
          <MySelect {...propsStore.select("topic.maxStudentTake")} />
        </Layout>
      </ScrollView>
    </Layout>
  );
};
