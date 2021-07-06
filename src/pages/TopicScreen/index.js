import TopicAssignApi from "api/topic/TopicAssignApi";
import { TopicForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";
import { currentSemester } from "utils";

const arrLink = [
  "topic.code",
  "topic.semester",
  "topic.major",
  "topic.educationMethod",
  "topic.name",
  "topicAssign.guideTeacher",
  "topicAssign.executeStudent",
];

const overTableProps = {
  links: arrLink,
  form: TopicForm,
  api: TopicAssignApi,
  defaultProps: {
    filterVisible: true,
    dataSearch: {
      filter: {
        "topic.semester": currentSemester(),
      },
    },
  },
};

console.log(overTableProps);

const TopicScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default TopicScreen;
