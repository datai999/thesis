import React from "react";

import StudentCreateLayout from "./StudentCreateLayout";

const form = {
  name: "",
  email: "",
  phone: "",

  educationMethodId: "",
  majorId: "",
  studentCode: "",
};

const StudentCreateProps = {
  header: "Create new student",
  submit: () => console.log(form),
  body: () => StudentCreateLayout(form),
};

export default StudentCreateProps;
