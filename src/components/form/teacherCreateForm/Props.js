import React from "react";

import TeacherCreateLayout from "./TeacherCreateLayout";

const form = {
  topicCode: "",
  topicName: "",
  guideTeacher: "",

  semester: "",
  majors: [],
  educationMethod: "",
  maxStudentTake: "",
  minStudentTake: "",

  description: "",

  mainTask: "",
  thesisTask: "",
  node: "",

  students: [],
};

const TeacherCreateProps = {
  header: "Create new teacher",
  submit: () => console.log(form),
  body: () => TeacherCreateLayout(form),
};

export default TeacherCreateProps;
