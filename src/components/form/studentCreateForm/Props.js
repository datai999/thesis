import StudentApi from "api/person/StudentApi";
import StudentCreateLayout from "./StudentCreateLayout";

const form = {};

const StudentCreateProps = {
  header: "Create new student",
  submit: () => StudentApi.create(form),
  body: () => StudentCreateLayout(form),
};

export default StudentCreateProps;
