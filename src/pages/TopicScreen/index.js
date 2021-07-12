import TopicAssignApi from "api/topic/TopicAssignApi";
import { TopicForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";
// import { currentSemester } from "utils";

const defaultFields = [
  {
    link: "topic.code",
    visible: true,
  },
  {
    link: "topic.semester",
    visible: false,
  },
  {
    link: "topic.major",
    visible: false,
  },
  {
    link: "topic.educationMethod",
    visible: false,
  },
  {
    link: "topic.name",
    visible: true,
  },
  {
    link: "topicAssign.guideTeacher",
    visible: false,
  },
  {
    link: "topicAssign.executeStudent",
    visible: false,
  },
];

const overTableProps = {
  tableName: "topicAssign",
  form: TopicForm,
  api: TopicAssignApi,
  defaultProps: {
    fields: defaultFields,
    filterVisible: true,
    dataSearch: {
      sort: { field: "topic.semester", descend: true },
      // FIXME default filter
      // filter: { "topic.semester": currentSemester() },
    },
  },
};

const TopicScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default TopicScreen;
