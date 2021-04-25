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
    placeholder: "Select",
    arrValue: Array.from({ length: 5 }, (v, k) => k + 1),
  },
  maxStudentTake: {
    label: "Max Student",
    placeholder: "Select",
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
  name: {
    label: "Name",
    placeholder: "Type name",
  },
  email: {
    label: "Email",
    placeholder: "HCMUT email",
  },
  phone: {
    label: "Phone",
    placeholder: "Type phone",
  },
  degree: {
    label: "Degree",
    placeholder: "Select degree",
    arrValue: ["Bachelor", "Master", "Doctor", "Professor"],
  },
  subjectDepartment: {
    label: "Subject Department",
    placeholder: "Select subject department",
    arrValue: [
      "Information System",
      "Software Technology",
      "Systems and Networks",
      "Computer Science",
      "Computer Engineering",
    ],
  },
  major: {
    label: "Major",
    placeholder: "Select major",
    arrValue: ["Computer Science", "Computer Engineering"],
  },
  studentCode: {
    label: "Code",
    placeholder: "Type student code",
  },
};

export default Props;
