import TeacherApi from "api/person/TeacherApi";
import { TeacherForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";

const arrLink = [
  "person.code",
  "person.name",
  "person.gender",
  "person.subjectDepartment",
  "person.degree",
  "person.email",
  "person.phone",
];

const overTableProps = {
  title: "screen.teacher",
  links: arrLink,
  form: TeacherForm,
  api: TeacherApi,
};

const TeacherScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default TeacherScreen;
