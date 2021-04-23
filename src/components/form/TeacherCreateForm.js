import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  Modal,
  Card,
  Input,
  Button,
  Text,
  Layout,
} from "@ui-kitten/components";

import Props from "data/Props";
import { MySelect, MyMultiSelect } from "components/Select";
import BottomCard from "components/BottomCard";
import { PlusIcon } from "components/Icons";

const form = {
  topicCode: "",
  topicName: "",
  guideTeacher: "",

  semester: "",
  majors: [],
  educationMethod: "",
  maxStudentTake: "",
  minStudentTake: "",

  description: "",

  mainTask: "",
  thesisTask: "",
  node: "",

  students: [],
};

const TeacherCreateForm = () => (
  <Layout>
    <Text>Teacher</Text>
  </Layout>
);

const styles = StyleSheet.create({
  modal: {
    width: "50%",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerText: {
    margin: 5,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});

export default TeacherCreateForm;
