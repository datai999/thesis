import TeacherApi from "api/person/TeacherApi";
import { TeacherForm } from "components/form";
import OverTable from "components/screen/OverTable";
import React from "react";
import { Dimensions } from "react-native";
import { assignPropsService } from "service";

const width = Dimensions.get("window").width;

const fields = [
  {
    link: "code",
    visible: true,
  },
  {
    link: "name",
    visible: true,
  },
  {
    link: "gender",
    visible: width > 800,
  },
  {
    link: "subjectDepartment",
    visible: width > 600,
  },
  {
    link: "degree",
    visible: width > 700,
  },
  {
    link: "email",
    visible: width > 500,
  },
  {
    link: "phone",
    visible: width > 800,
  },
];

const overTableProps = {
  tableName: "teacher",
  form: TeacherForm,
  api: TeacherApi,
  fields: assignPropsService(fields, "person."),
};

const TeacherScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default TeacherScreen;
