import React from "react";

import StudentCreateLayout from "./StudentCreateLayout";

const form = {
  name: "",
  email: "",
  phone: "",

  education_method_id: "",
  major_id: "",
  student_code: "",
};

const StudentCreateProps = {
  header: "Create new student",
  submit: () => console.log(form),
  body: () => StudentCreateLayout(form),
};

export default StudentCreateProps;
