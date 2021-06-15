import { Layout, Text } from "@ui-kitten/components";
import CriterionApi from "api/score/CriterionApi";
import { MyInput } from "components/Input";
import _ from "lodash";
import React from "react";
import { StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { createProps } from "utils";
import i18n from "utils/i18n";

let form = {};

const CriterionForm = {
  create: "criterion.create",
  update: "criterion.update",
  body: (data) => {
    let header = CriterionForm.create;
    if (data != null) {
      form = _.cloneDeep(data);
      header = CriterionForm.update;
    } else form = {};
    return <FormLayout header={header} />;
  },
  submit: () => CriterionApi.create(form),
};

const FormLayout = ({ header }) => {
  const propStore = createProps(form);
  const [multiLang, setMultiLang] = React.useState(0);

  return (
    <Layout style={styles.container}>
      <Layout style={{ flexDirection: "row" }}>
        <IconButton
          icon="translate"
          onPress={() => setMultiLang(multiLang + 1)}
        />
        <Text style={styles.headerText}>{i18n.t(header)}</Text>
      </Layout>

      <MyInput {...propStore.inputLang("criterion.name")} />
      {multiLang > 0 && (
        <MyInput {...propStore.inputToggleLang("criterion.name")} />
      )}

      <MyInput {...propStore.inputLang("criterion.description")} />
      {multiLang > 0 && (
        <MyInput {...propStore.inputToggleLang("criterion.description")} />
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

export default CriterionForm;
