import TopicAssignApi from "api/topic/TopicAssignApi";
import { TopicForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";
import { Dimensions } from "react-native";

// import { currentSemester } from "utils";

const width = Dimensions.get("window").width;

const defaultFields = [
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
    link: "topicAssign.guideTeacher",
    visible: width > 1000,
  },
  {
    link: "topicAssign.executeStudent",
    visible: width > 1200,
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
