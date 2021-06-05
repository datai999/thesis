import TopicAssignApi from "api/topic/TopicAssignApi";
import { TopicForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";

const arrLink = [
  "topic.topicCode",
  "topic.semester",
  "topic.major",
  "topic.educationMethod",
  "topic.name",
  "topicAssign.guideTeacher.name",
  "topicAssign.executeStudent.name",
];

const overTableProps = {
  links: arrLink,
  form: TopicForm,
  api: TopicAssignApi,
};

const TopicScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default TopicScreen;
