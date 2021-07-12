import StudentApi from "api/person/StudentApi";
import { StudentForm } from "components/form";
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
    visible: width > 500,
  },
  {
    link: "person.educationMethod",
    visible: width > 500,
  },
  {
    link: "person.major",
    visible: width > 500,
  },
  {
    link: "person.email",
    visible: width > 700,
  },
  {
    link: "person.phone",
    visible: width > 800,
  },
];

const overTableProps = {
  tableName: "student",
  form: StudentForm,
  api: StudentApi,
  defaultProps: {
    fields: defaultFields,
  },
};

const StudentScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default StudentScreen;
