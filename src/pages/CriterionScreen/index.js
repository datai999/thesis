import { Layout, Text } from "@ui-kitten/components";
import { SettingApi } from "api/br";
import CriterionTemplateApi from "api/score/CriterionTemplateApi";
import { CreateBtn } from "components/Button";
import { CriterionForm, CriterionTemplateForm } from "components/form";
import OverTable from "components/screen/OverTable";
import { TableContent } from "components/table";
import React from "react";
import { StyleSheet } from "react-native";
import { i18n } from "utils";

const defaultFields = [
  {
    link: "criterionTemplate.name",
    visible: true,
  },
  {
    link: "criterionTemplate.scoreMethod",
    visible: true,
  },
  {
    link: "criterionTemplate.description",
    visible: true,
  },
  {
    link: "criterionTemplate.criterion",
    visible: true,
  },
];

const overTopBar = () => {
  return <CreateBtn form={CriterionForm} />;
};

function renderTopContent({ ...props }) {
  const [topicTemplate, setTopicTemplate] = React.useState();
  const [thesisTemplate, setThesisTemplate] = React.useState();

  React.useEffect(() => {
    const fetchData = () => {
      SettingApi.getTemplate(false).then(setTopicTemplate);
      SettingApi.getTemplate(true).then(setThesisTemplate);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Text style={styles.group} category="s2">
        {i18n.t("criterionTemplate.topicTemplate")}
      </Text>
      <TableContent {...props} data={topicTemplate?.setting} />
      <Text style={styles.group} category="s2">
        {i18n.t("criterionTemplate.thesisTemplate")}
      </Text>
      <TableContent {...props} data={thesisTemplate?.setting} />
      <Text style={styles.group} category="s2">
        {i18n.t("criterionTemplate.allTemplate")}
      </Text>
    </Layout>
  );
}

const overTableProps = {
  tableName: "criterionTemplate",
  form: CriterionTemplateForm,
  api: CriterionTemplateApi,
  overTopBar: overTopBar,
  topContent: renderTopContent,
  defaultProps: {
    fields: defaultFields,
  },
};

const CriterionScreen = () => {
  return <OverTable {...overTableProps} />;
};

const styles = StyleSheet.create({
  group: {
    marginTop: 30,
  },
});

export default CriterionScreen;
