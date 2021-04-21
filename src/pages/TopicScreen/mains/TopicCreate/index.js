import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Modal, Card, Text, Layout } from "@ui-kitten/components";

import TopicCreateForm from "./TopicCreateForm";
import TopicCreateBottom from "./TopicCreateBottom";

const topicCreateForm = {
  topicCode: "123",
  topicName: "Name of topic",
  guideTeacher: "Nguyen Thi Ai",

  semester: "202",
  majors: ["Computer Science"],
  educationMethod: "Formal",
  maxStudentTake: 3,
  minStudentTake: 1,

  description: "description",

  mainTask: "To do something",
  thesisTask: "Todo something when thesis",
  node: "note",

  students: ["Nguyen Duc Anh Tai", "Tai Nguyen Duc Anh"],
};

const TopicCreate = ({ createVisible, setCreateVisible }) => {
  let animation = null;
  const animationEnd = () =>
    animation.zoomOut(500).then((endState) => setCreateVisible(false));

  const [form, setForm] = React.useState(topicCreateForm);
  const [toggle, setToggle] = React.useState(false);

  const setValue = (path, value) => {
    _.set(form, path, value);
    setToggle(!toggle);
  };

  return (
    <Modal
      style={styles.modal}
      visible={createVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={animationEnd}
    >
      <Animatable.View
        style={{ flex: 1 }}
        animation="zoomIn"
        ref={(ref) => (animation = ref)}
      >
        <Card
          style={styles.card}
          header={() => <Text style={styles.headerText}>Create topic</Text>}
          footer={() => <TopicCreateBottom animationEnd={animationEnd} />}
        >
          <TopicCreateForm form={form} setValue={setValue} />
        </Card>
      </Animatable.View>
    </Modal>
  );
};

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

export default TopicCreate;
