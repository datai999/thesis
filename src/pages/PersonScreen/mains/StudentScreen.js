import StudentApi from "api/person/StudentApi";
import { StudentForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";

const arrLink = [
  "person.code",
  "person.name",
  "person.gender",
  "person.educationMethod",
  "person.major",
  "person.email",
  "person.phone",
];

const overTableProps = {
  title: "screen.student",
  links: arrLink,
  form: StudentForm,
  api: StudentApi,
};

const StudentScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default StudentScreen;
