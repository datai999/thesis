const Props = {
  educationMethod: {
    label: "Education method",
    placeholder: "Select education method",
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
  },
  subjectDepartment: {
    label: "Subject Department",
    placeholder: "Select subject department",
  },
  major: {
    label: "Major",
    placeholder: "Select major",
  },
  studentCode: {
    label: "Code",
    placeholder: "Type student code",
  },
};

export default Props;
