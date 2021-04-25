import React from "react";

import StudentCreateLayout from "./StudentCreateLayout";

const form = {
  name: "",
  email: "",
  phone: "",

  degree_id: "",
  subject_department_id: "",
};

const StudentCreateProps = {
  header: "Create new student",
  submit: () => console.log(form),
  body: () => StudentCreateLayout(form),
};

export default StudentCreateProps;
