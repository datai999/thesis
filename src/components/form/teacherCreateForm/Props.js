import TeacherApi from "api/person/TeacherApi";
import TeacherCreateLayout from "./TeacherCreateLayout";

const form = {};

const TeacherCreateProps = {
  header: "Create new teacher",
  submit: () => TeacherApi.create(form),
  body: () => TeacherCreateLayout(form),
};

export default TeacherCreateProps;
