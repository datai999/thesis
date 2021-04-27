import React from "react";

import TopicCreateLayout from "./TopicCreateLayout";

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

const TopicCreateProps = {
  header: "Create topic",
  submit: () => console.log(form),
  body: () => TopicCreateLayout(form),
};

export default TopicCreateProps;