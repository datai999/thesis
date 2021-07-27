import { Layout, Text } from "@ui-kitten/components";
import { MyInput } from "components/Input";
import React from "react";
import { ScrollView } from "react-native";
import { i18n } from "utils";

const multilineProps = { multiline: true, numberOfLines: 5 };

export default ({ styles, propsStore, multiLang }) => {
  return (
    <Layout style={styles.group}>
      <Text style={styles.headerGroup}>
        {i18n.t("origin.topicDescription")}
      </Text>
      <ScrollView showsVerticalScrollIndicator={true}>
        <MyInput
          {...propsStore.inputLang("topic.description")}
          {...multilineProps}
        />
        {multiLang > 0 && (
          <MyInput
            {...propsStore.inputToggleLang("topic.description")}
            {...multilineProps}
          />
        )}
        <MyInput
          {...propsStore.inputLang("topic.topicTask")}
          {...multilineProps}
        />
        {multiLang > 0 && (
          <MyInput
            {...propsStore.inputToggleLang("topic.topicTask")}
            {...multilineProps}
          />
        )}
        <MyInput
          {...propsStore.inputLang("topic.thesisTask")}
          {...multilineProps}
        />
        {multiLang > 0 && (
          <MyInput
            {...propsStore.inputToggleLang("topic.thesisTask")}
            {...multilineProps}
          />
        )}
      </ScrollView>
    </Layout>
  );
};
