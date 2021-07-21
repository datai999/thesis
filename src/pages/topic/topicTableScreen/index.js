import TopicAssignApi from "api/topic/TopicAssignApi";
import { TopicForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";
import { Dimensions } from "react-native";
import { assignPropsService } from "service";
import { currentSemester } from "utils";

const width = Dimensions.get("window").width;

const fields = [
  {
    link: "id",
    visible: true,
  },
  {
    link: "topic.code",
    visible: true,
  },
  {
    link: "topic.semester",
    visible: width > 500,
  },
  {
    link: "topic.major",
    visible: width > 1000,
  },
  {
    link: "topic.educationMethod",
    visible: width > 1200,
  },
  {
    link: "topic.name",
    visible: true,
  },
  {
    link: "guideTeacher",
    visible: width > 1000,
    label: "teacher.guide.label",
    placeholder: "teacher.guide.placeholder",
  },
  {
    link: "executeStudent",
    visible: width > 1200,
    label: "student.execute.label",
    placeholder: "student.execute.placeholder",
  },
];

const overTableProps = {
  tableName: "topicAssign",
  form: TopicForm,
  api: TopicAssignApi,
  filterVisible: true,
  fields: assignPropsService(fields),
  dataSearch: {
    sort: { field: "id", descend: false },
    filter: { "topic.semester": currentSemester() },
  },
};

const TopicScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default TopicScreen;
