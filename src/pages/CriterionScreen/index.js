import CriterionTemplateApi from "api/score/CriterionTemplateApi";
import { TeacherForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";

const arrLink = [
  "criterionTemplate.name",
  "criterionTemplate.scoreMethod",
  "criterionTemplate.description",
  "criterionTemplate.criterion",
];

const overTableProps = {
  links: arrLink,
  form: TeacherForm,
  api: CriterionTemplateApi,
};

const CriterionScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default CriterionScreen;
