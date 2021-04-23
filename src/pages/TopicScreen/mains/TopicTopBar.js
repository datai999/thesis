import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Layout, Input, Button } from "@ui-kitten/components";

import TopicCreate from "./TopicCreate";

import MyModal from "components/Modal";
import TopicCreateForm from "components/form/TopicCreateForm";
import { SearchIcon, PlusIcon } from "components/Icons";

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

const TopicTopBar = ({ callBack }) => {
  const [value, setValue] = React.useState("");
  const [createTopicVisible, setCreateTopicVisible] = React.useState(true);

  const modalTopicCreateProps = {
    visible: createTopicVisible,
    header: "Create topic",
    submit: () => console.log(form),
    cancel: () => setCreateTopicVisible(false),
    body: () => TopicCreateForm(form),
  };

  return (
    <Layout style={styles.container}>
      <Button
        style={styles.btnNew}
        status="primary"
        size="small"
        accessoryRight={PlusIcon}
        onPress={() => setCreateTopicVisible(true)}
      >
        NEW
      </Button>
      <Input
        style={styles.input}
        value={value}
        placeholder="Filter and Search"
        accessoryRight={SearchIcon}
        onChangeText={(nextValue) => setValue(nextValue)}
      />

      <MyModal {...modalTopicCreateProps} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    width: "50%",
  },
  btnNew: {
    marginHorizontal: 10,
  },
  input: {
    width: "80%",
  },
});

export default TopicTopBar;
