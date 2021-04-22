import React from "react";

const Props = {
  educationMethod: {
    label: "Education method",
    placeholder: "Select education method",
    arrValue: ["Formal", "CLC", "Link"],
  },
  semester: {
    label: "Semester",
    placeholder: "Select semester",
    arrValue: Array(3)
      .fill()
      .map(
        (element, index) =>
          (
            parseInt(new Date().getFullYear().toString().substr(2)) +
            parseInt(index / 3)
          ).toString() +
          ((index % 3) + 1)
      ),
  },
  guideTeacher: {
    label: "Guide teacher",
    placeholder: "Select guide teacher",
  },
  majors: {
    label: "Majors",
    placeholder: "Select majors",
    arrValue: ["Computer Science", "Computer Engineering"],
  },
  topicCode: {
    label: "Topic code",
    placeholder: "Topic code",
  },
  topicName: {
    label: "Topic name",
    placeholder: "Topic name",
  },
  minStudentTake: {
    label: "Min Student",
    arrValue: Array.from({ length: 5 }, (v, k) => k + 1),
  },
  maxStudentTake: {
    label: "Max Student",
    arrValue: Array.from({ length: 5 }, (v, k) => k + 1),
  },
  students: {
    label: "Student",
    placeholder: "Select student",
  },
  mainTask: {
    label: "Main task",
    multiline: true,
    numberOfLines: 3,
  },
  thesisTask: {
    label: "Thesis task",
    multiline: true,
    numberOfLines: 3,
  },
  description: {
    label: "Description",
    multiline: true,
    numberOfLines: 5,
  },
};

export default Props;
