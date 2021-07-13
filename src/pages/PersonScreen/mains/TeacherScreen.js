import TeacherApi from "api/person/TeacherApi";
import { TeacherForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const defaultFields = [
  {
    link: "person.code",
    visible: true,
  },
  {
    link: "person.name",
    visible: true,
  },
  {
    link: "person.gender",
    visible: width > 800,
  },
  {
    link: "person.subjectDepartment",
    visible: width > 600,
  },
  {
    link: "person.degree",
    visible: width > 700,
  },
  {
    link: "person.email",
    visible: width > 500,
  },
  {
    link: "person.phone",
    visible: width > 900,
  },
];

const overTableProps = {
  tableName: "teacher",
  form: TeacherForm,
  api: TeacherApi,
  defaultProps: {
    fields: defaultFields,
  },
};

const TeacherScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default TeacherScreen;
