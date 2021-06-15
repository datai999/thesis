import { StyleSheet } from "react-native";

const commonStyle = { justifyContent: "center" };

export default StyleSheet.create({
  no: {
    ...commonStyle,
    maxWidth: 30,
  },
  code: {
    ...commonStyle,
    maxWidth: 80,
  },
  semester: {
    ...commonStyle,
    maxWidth: 70,
  },
  major: {
    ...commonStyle,
    maxWidth: 170,
  },
  educationMethod: {
    ...commonStyle,
    maxWidth: 140,
  },
  name: {
    ...commonStyle,
  },
  guideTeacher: {
    ...commonStyle,
  },
  email: {
    ...commonStyle,
  },
  executeStudent: {
    ...commonStyle,
  },
  gender: {
    ...commonStyle,
    maxWidth: 70,
  },
  phone: {
    ...commonStyle,
    maxWidth: 100,
  },
  degree: {
    ...commonStyle,
    maxWidth: 70,
  },
  subjectDepartment: {
    ...commonStyle,
    maxWidth: 150,
  },
});
