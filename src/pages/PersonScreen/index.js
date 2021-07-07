import React from "react";
import StudentScreen from "./mains/StudentScreen";
import TeacherScreen from "./mains/TeacherScreen";

const PersonScreen = ({ ...props }) => {
  return props.route.params.mode == "teacher" ? (
    <TeacherScreen />
  ) : (
    <StudentScreen />
  );
};

export default PersonScreen;
