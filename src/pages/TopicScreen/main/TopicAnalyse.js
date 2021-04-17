import React from "react";
import { StyleSheet } from "react-native";
import { List, Button } from "@ui-kitten/components";

import { CloseIcon } from "../../../components/icons";

const TopicAnalyse = ({ tags }) => (
  <List
    horizontal={true}
    data={tags}
    renderItem={({ index, item }) => (
      <Button
        style={styles.tag}
        status="primary"
        size="tiny"
        accessoryRight={CloseIcon}
      >
        {item}
      </Button>
    )}
  />
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  tag: {
    marginHorizontal: 2,
  },
});

export default TopicAnalyse;
