import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Button } from "@ui-kitten/components";

import createTopic from "actions/CreateTopic";

const TopicCreateBottom = ({ animationEnd, form, callBack, ...props }) => {
  return (
    <Layout style={styles.popupBot}>
      <Button
        style={styles.popupBotBtn}
        onPress={() => {
          createTopic(form);
          animationEnd();
          callBack();
        }}
      >
        Submit
      </Button>
      <Button style={styles.popupBotBtn} onPress={animationEnd}>
        Cancel
      </Button>
    </Layout>
  );
};

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
