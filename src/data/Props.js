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
  minStudentTake: {
    arrValue: Array.from({ length: 5 }, (v, k) => k + 1),
  },
  maxStudentTake: {
    arrValue: Array.from({ length: 5 }, (v, k) => k + 1),
  },
  degree: {
    label: "person.degree.label",
    placeholder: "person.degree.placeholder",
    arrValue: ["Bachelor", "Master", "Doctor", "Professor"],
  },
  subjectDepartment: {
    label: "person.subjectDepartment.label",
    placeholder: "person.subjectDepartment.placeholder",
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
  reserveRoom: {
    label: "council.reserveRoom",
    placeholder: "council.reserveRoom_type",
  },
  reserveDate: {
    label: "council.reserveDate",
  },
  startTime: {
    label: "time.start",
  },
  endTime: {
    label: "time.end",
  },
  councilRole: {
    label: "council.role",
    placeholder: "council.role_type",
    arrValue: [],
  },
  gender: {
    label: "person.gender.label",
    placeholder: "person.gender.placeholder",
  },
};

export default Props;
