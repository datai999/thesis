import TopicAssignApi from "api/topic/TopicAssignApi";
import { TopicForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";
import { Dimensions } from "react-native";

// import { currentSemester } from "utils";

const width = Dimensions.get("window").width;

const assignProps = (propsApi) => {
  const assignProp = (propApi) => {
    return {
      api: propApi.link,
      label: propApi.link + ".label",
      placeholder: propApi.link + ".placeholder",
      ...propApi,
    };
  };
  return Array.from(propsApi, assignProp);
};

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
  filterVisible: false,
  fields: assignProps(defaultFields),
  dataSearch: {
    sort: { field: "topic.semester", descend: true },
    // FIXME default filter
    // filter: { "topic.semester": currentSemester() },
  },
};

const TopicScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default TopicScreen;
