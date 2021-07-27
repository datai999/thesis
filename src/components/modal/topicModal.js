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

            <Layout style={{ marginVertical: 15 }}>
              <Input
                label={i18n.t("topic.code.label")}
                value={getRenderText(topic.code)}
              />
              <Input
                label={i18n.t("topic.educationMethod.label")}
                value={getRenderText(topic.educationMethod)}
              />
              <Input
                label={i18n.t("topic.semester.label")}
                value={getRenderText(topic.semester)}
              />
              <Input
                label={i18n.t("topic.major.label")}
                value={getRenderText(topic.major)}
              />
              <Layout
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <Input
                  label={i18n.t("topic.minStudentTake.label")}
                  value={getRenderText(topic.minStudentTake)}
                />
                <Input
                  label={i18n.t("topic.maxStudentTake.label")}
                  value={getRenderText(topic.maxStudentTake)}
                />
              </Layout>

              <Input
                multiline
                numberOfLines={5}
                label={i18n.t("topic.description.label")}
                value={getRenderText(topic.description)}
              />
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
    maxWidth: "95%",
    maxHeight: "80%",
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
