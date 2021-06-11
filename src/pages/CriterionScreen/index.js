import { Divider, Layout, Text } from "@ui-kitten/components";
import CriterionTemplateApi from "api/score/CriterionTemplateApi";
import { CreateBtn } from "components/Button";
import { CriterionForm, CriterionTemplateForm } from "components/form";
import OverTable from "components/screen/OverTable";
import { TableContent } from "components/screen/TableData";
import React from "react";
import i18n from "utils/i18n";

const arrLink = [
  "criterionTemplate.name",
  "criterionTemplate.scoreMethod",
  "criterionTemplate.description",
  "criterionTemplate.criterion",
];

const overTopBar = () => {
  return <CreateBtn form={CriterionForm} />;
};

function renderTopContent({ links, rowCallBack }) {
  return (
    <Layout>
      <Text appearance="hint" category="label">
        {i18n.t("criterionTemplate.topicTemplate")}
      </Text>
      <Divider />
      <Text appearance="hint" category="label">
        {i18n.t("criterionTemplate.thesisTemplate")}
      </Text>
      <Divider />
      <TableContent links={links} data={[]} rowCallBack={rowCallBack} />
      <Text appearance="hint" category="label">
        {i18n.t("criterionTemplate.allTemplate")}
      </Text>
    </Layout>
  );
}

const overTableProps = {
  title: "screen.criterion",
  links: arrLink,
  form: CriterionTemplateForm,
  api: CriterionTemplateApi,
  overTopBar: overTopBar,
  topContent: renderTopContent,
};

const CriterionScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default CriterionScreen;
