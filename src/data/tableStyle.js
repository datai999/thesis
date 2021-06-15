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
  executeStudent: {
    ...commonStyle,
  },
});
