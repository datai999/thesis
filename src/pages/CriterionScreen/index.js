import CriterionTemplateApi from "api/score/CriterionTemplateApi";
import { CreateBtn } from "components/Button";
import { CriterionTemplateForm, TopicForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";

const arrLink = [
  "criterionTemplate.name",
  "criterionTemplate.scoreMethod",
  "criterionTemplate.description",
  "criterionTemplate.criterion",
];

const overTopBar = () => {
  const [count, setCount] = React.useState(0);
  return <CreateBtn form={TopicForm} />;
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
