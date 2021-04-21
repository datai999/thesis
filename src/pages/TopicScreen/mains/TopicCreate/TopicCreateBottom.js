import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "@ui-kitten/components";

const TopicCreateBottom = ({ topicCreateSubmit, animationEnd }) => (
  <Layout style={styles.popupBot}>
    <Button style={styles.popupBotBtn} onPress={topicCreateSubmit}>
      Submit
    </Button>
    <Button style={styles.popupBotBtn} onPress={animationEnd}>
      Cancel
    </Button>
  </Layout>
);

const styles = StyleSheet.create({
  popupBot: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  popupBotBtn: {
    margin: 5,
  },
});

export default TopicCreateBottom;
