import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Modal, Card, Text, Layout } from "@ui-kitten/components";

import BottomCard from "components/BottomCard";

import TopicCreateForm from "components/form/TopicCreateForm";

import createTopic from "actions/CreateTopic";

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

const TopicCreate = ({ createVisible, setCreateVisible, callBack }) => {
  let animation = null;
  const animationEnd = () =>
    animation.zoomOut(500).then((endState) => setCreateVisible(false));

  const [toggle, setToggle] = React.useState(false);

  const refresh = () => setToggle(!toggle);

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
          footer={() => (
            <BottomCard
              animationEnd={animationEnd}
              form={form}
              submit={() => createTopic(form)}
            />
          )}
        >
          <TopicCreateForm form={form} callBack={refresh} />
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
