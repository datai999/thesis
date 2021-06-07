import { Layout, Text } from "@ui-kitten/components";
import CriterionTemplateApi from "api/score/CriterionTemplateApi";
import { MyInput } from "components/Input";
import { MySelect } from "components/Select";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { createProps } from "utils";
import i18n from "utils/i18n";

let form = {};

const CouncilForm = {
  create: i18n.t("criterionTemplate.create"),
  update: i18n.t("criterionTemplate.update"),
  body: (data) => {
    let header = "criterionTemplate.create";
    if (data != null) {
      form = _.cloneDeep(data);
      header = "criterionTemplate.update";
    } else form = {};
    return <FormLayout header={header} />;
  },
  submit: () => CriterionTemplateApi.create(form),
};

const FormLayout = ({ header }) => {
  const propStore = createProps(form);
  const [multiLang, setMultiLang] = React.useState(0);

  return (
    <Layout style={styles.container}>
      <Layout
        style={{
          flexDirection: "row",
          marginBottom: 15,
        }}
      >
        <IconButton
          icon="translate"
          onPress={() => setMultiLang(multiLang + 1)}
        />
        <Text style={styles.headerText}>{i18n.t(header)}</Text>
      </Layout>

      <MyInput {...propStore.inputLang("criterionTemplate.name")} />
      {multiLang > 0 && (
        <MyInput {...propStore.inputToggleLang("criterionTemplate.name")} />
      )}

      <MySelect {...propStore.select("criterionTemplate.scoreMethod")} />

      <MyInput {...propStore.inputLang("criterionTemplate.description")} />
      {multiLang > 0 && (
        <MyInput
          {...propStore.inputToggleLang("criterionTemplate.description")}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
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
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});

export default CouncilForm;
