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
  reviewTeacher: {
    label: "teacher.review",
    placeholder: "teacher.review_select",
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
    en: {
      label: "thesisTask",
      placeholder: "topic.task_thesis_ph_en",
      multiline: true,
      numberOfLines: 5,
    },
    vi: {
      label: "thesisTask",
      placeholder: "topic.task_thesis_ph_vi",
      multiline: true,
      numberOfLines: 5,
    },
  },
  description: {
    en: {
      label: "description",
      placeholder: "description_ph_en",
      multiline: true,
      numberOfLines: 5,
    },
    vi: {
      label: "description",
      placeholder: "description_ph_vi",
      multiline: true,
      numberOfLines: 5,
    },
  },
  name: {
    label: "fullName",
    placeholder: "fullName_ph",
  },
  email: {
    label: "Email",
    placeholder: "HCMUT email",
  },
  phone: {
    label: "phone",
    placeholder: "phone_type",
  },
  degree: {
    label: "degree",
    placeholder: "degree_select",
    arrValue: ["Bachelor", "Master", "Doctor", "Professor"],
  },
  subjectDepartment: {
    label: "subjectDepartment",
    placeholder: "subjectDepartment_select",
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
    placeholder: "majorSelect",
    arrValue: ["Computer Science", "Computer Engineering"],
  },
  studentCode: {
    label: "student.code",
    placeholder: "student.code_type",
  },
};

export default Props;
