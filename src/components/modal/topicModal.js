import { Button, Input, Layout, Modal, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { navService } from "service";
import { getRenderText, i18n } from "utils";

const navigateTopicScreen = (topic) => {
  navService.navigate("topic", {
    screen: "topicCreate",
    params: { topic: topic },
  });
};

export default ({ visible, disableVisible, topic }) => {
  const animationRef = React.useRef();
  const animationEnd = () =>
    animationRef.current.zoomOut(500).then(() => disableVisible());

  const endThenNavigateTopicScreen = async () => {
    await animationEnd();
    navigateTopicScreen(topic);
  };

  return (
    <Modal
      style={styles.modal}
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={animationEnd}
    >
      {topic && (
        <Animatable.View
          style={{ flex: 1, backgroundColor: "white" }}
          animation="zoomIn"
          ref={animationRef}
        >
          <Layout style={styles.container}>
            <Text category="h6" style={{ textAlign: "center" }}>
              {getRenderText(topic.name)}
            </Text>
            <Layout
              style={{ flexDirection: "row", marginVertical: 15, flex: 1 }}
            >
              <Layout style={{ textAlign: "right" }}>
                <Text>{i18n.t("topic.code.label")} :</Text>
                <Text>{i18n.t("topic.educationMethod.label")} :</Text>
                <Text>{i18n.t("topic.semester.label")} :</Text>
                <Text>{i18n.t("topic.major.label")} :</Text>
                <Text>{i18n.t("topic.minStudentTake.label")} :</Text>
                <Text>{i18n.t("topic.maxStudentTake.label")} :</Text>
                <Text>{i18n.t("topic.description.label")} :</Text>
              </Layout>
              <Layout style={{ marginLeft: 10, flex: 1 }}>
                <Text> {getRenderText(topic.code)}</Text>
                <Text> {getRenderText(topic.educationMethod?.value)}</Text>
                <Text> {getRenderText(topic.semester)}</Text>
                <Text> {getRenderText(topic.major)}</Text>
                <Text> {getRenderText(topic.minStudentTake)}</Text>
                <Text> {getRenderText(topic.maxStudentTake)}</Text>
                <Input
                  multiline
                  numberOfLines={5}
                  status="basic"
                  value={getRenderText(topic.description)}
                  style={{ flex: 1 }}
                />
              </Layout>
            </Layout>

            <Layout style={styles.bottom}>
              <Button size="small" onPress={endThenNavigateTopicScreen}>
                {i18n.t("origin.topic.edit")}
              </Button>
              <Button size="small" onPress={animationEnd}>
                {i18n.t("origin.cancel")}
              </Button>
            </Layout>
          </Layout>
        </Animatable.View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    minWidth: "30%",
    minHeight: "30%",
    maxWidth: "70%",
    maxHeight: "70%",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    flex: 1,
    padding: 15,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
