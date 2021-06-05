import TopicAssignApi from "api/topic/TopicAssignApi";
import { TopicForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";

const arrLink = [
  "topicAssign.topic.code",
  "topicAssign.topic.semester",
  "topicAssign.topic.major",
  "topicAssign.topic.educationMethod",
  "topicAssign.topic.name",
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
