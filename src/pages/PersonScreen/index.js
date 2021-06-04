import React from "react";
import StudentScreen from "./mains/StudentScreen";
import TeacherScreen from "./TeacherScreen";

const PersonScreen = ({ ...props }) => {
  return props.mode == "teacher" ? <TeacherScreen /> : <StudentScreen />;
};

export default PersonScreen;
