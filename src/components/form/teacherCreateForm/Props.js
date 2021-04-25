import React from "react";

import TeacherCreateLayout from "./TeacherCreateLayout";

const form = {
  name: "",
  email: "",
  phone: "",

  degree_id: "",
  subject_department_id: "",
};

const TeacherCreateProps = {
  header: "Create new teacher",
  submit: () => console.log(form),
  body: () => TeacherCreateLayout(form),
};

export default TeacherCreateProps;
