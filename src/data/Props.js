const Props = {
  educationMethod: {
    label: "educationMethod",
    placeholder: "educationMethodSelect",
    arrValue: ["Formal", "CLC", "Link"],
  },
  semester: {
    label: "semester",
    placeholder: "semesterSelect",
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
    label: "teacher.guide",
    placeholder: "teacher.guideSelect",
  },
  topicCode: {
    label: "topic.code",
    placeholder: "topic.code",
  },
  topicName: {
    en: {
      label: "topic.name",
      placeholder: "topic.name_ph_en",
    },
    vi: {
      label: "topic.name",
      placeholder: "topic.name_ph_vi",
    },
  },
  minStudentTake: {
    label: "student.min",
    placeholder: "Select",
    arrValue: Array.from({ length: 5 }, (v, k) => k + 1),
  },
  maxStudentTake: {
    label: "student.max",
    placeholder: "Select",
    arrValue: Array.from({ length: 5 }, (v, k) => k + 1),
  },
  students: {
    label: "student.execute",
    placeholder: "student.typeName",
  },
  mainTask: {
    en: {
      label: "mainTask",
      placeholder: "topic.task_main_ph_en",
      multiline: true,
      numberOfLines: 5,
    },
    vi: {
      label: "mainTask",
      placeholder: "topic.task_main_ph_vi",
      multiline: true,
      numberOfLines: 5,
    },
  },
  thesisTask: {
    label: "thesisTask",
    multiline: true,
    numberOfLines: 5,
  },
  description: {
    label: "description",
    multiline: true,
    numberOfLines: 5,
  },
  name: {
    label: "name",
    placeholder: "Type name",
  },
  email: {
    label: "email",
    placeholder: "HCMUT email",
  },
  phone: {
    label: "phone",
    placeholder: "Type phone",
  },
  degree: {
    label: "degree",
    placeholder: "Select degree",
    arrValue: ["Bachelor", "Master", "Doctor", "Professor"],
  },
  subjectDepartment: {
    label: "subjectDepartment",
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
    label: "major",
    placeholder: "Select major",
    arrValue: ["Computer Science", "Computer Engineering"],
  },
  studentCode: {
    label: "code",
    placeholder: "Type student code",
  },
};

export default Props;
