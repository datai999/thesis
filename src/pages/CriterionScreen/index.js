import CriterionTemplateApi from "api/score/CriterionTemplateApi";
import { CreateBtn } from "components/Button";
import { CriterionForm, CriterionTemplateForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";

const arrLink = [
  "criterionTemplate.name",
  "criterionTemplate.scoreMethod",
  "criterionTemplate.description",
  "criterionTemplate.criterion",
];

const overTopBar = () => {
  return <CreateBtn form={CriterionForm} />;
};

const overTableProps = {
  links: arrLink,
  form: CriterionTemplateForm,
  api: CriterionTemplateApi,
  overTopBar: overTopBar,
};

const CriterionScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default CriterionScreen;
