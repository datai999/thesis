import { Button } from "@ui-kitten/components";
import CriterionTemplateApi from "api/score/CriterionTemplateApi";
import { CriterionTemplateForm } from "components/form";
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
  return (
    <Button status="primary" size="small" onPress={() => setCount(count + 1)}>
      {count}
    </Button>
  );
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
