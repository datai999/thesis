import React from "react";

import TopicCreate from "./TopicCreate";

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
  body: () => TopicCreate(form),
};

export default TopicCreateProps;
