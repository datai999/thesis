import TeacherCreateLayout from "./TeacherCreateLayout";

const form = {
  name: "",
  email: "",
  phone: "",

  degree: "",
  subjectDepartment: "",
};

const TeacherCreateProps = {
  header: "Create new teacher",
  submit: () => console.log(form),
  body: () => TeacherCreateLayout(form),
};

export default TeacherCreateProps;
