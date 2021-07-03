import { Layout, Text } from "@ui-kitten/components";
import TopicAssignApi from "api/topic/TopicAssignApi";
import { TopicForm } from "components/form";
import { MyInput } from "components/Input";
import OverTable from "components/screen/OverTable";
import React from "react";
import { i18n } from "utils";

const arrLink = [
  "topic.code",
  "topic.semester",
  "topic.major",
  "topic.educationMethod",
  "topic.name",
  "topicAssign.guideTeacher",
  "topicAssign.executeStudent",
];

const TopicScreen = () => {
  const [semester, setSsemester] = React.useState(171);

  const api = {
    ...TopicAssignApi,
    getPaging: (param) => {
      const pageParam = {
        ...param,
        semester: semester,
      };
      return TopicAssignApi.getPaging(pageParam);
    },
  };

  const overTopBarProps = {
    value: semester,
    callBack: setSsemester,
    size: "small",
    style: { marginVertical: 5, marginHorizontal: 10, width: 50 },
  };

  const overTopBar = () => {
    return (
      <Layout
        style={{
          flexDirection: "row",
          marginHorizontal: 30,
          alignItems: "center",
        }}
      >
        <Text category="label" appearance="hint">
          {i18n.t("topic.semester.label")}
        </Text>
        <MyInput {...overTopBarProps} />
      </Layout>
    );
  };

  const overTableProps = {
    links: arrLink,
    form: TopicForm,
    api: api,
    overTopBar: overTopBar,
  };

  return <OverTable {...overTableProps} />;
};

export default TopicScreen;
