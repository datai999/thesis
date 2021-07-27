import StudentApi from "api/person/StudentApi";
import { StudentForm } from "components/form";
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
    visible: width > 500,
  },
  {
    link: "educationMethod",
    visible: width > 500,
  },
  {
    link: "major",
    visible: width > 500,
  },
  {
    link: "email",
    visible: width > 700,
  },
  {
    link: "phone",
    visible: width > 800,
  },
];

const overTableProps = {
  tableName: "student",
  form: StudentForm,
  api: StudentApi,
  fields: assignPropsService(fields, "person."),
};

const StudentScreen = () => {
  return <OverTable {...overTableProps} />;
};

export default StudentScreen;
