import React from "react";
import { View, StyleSheet } from "react-native";

import TopicTopBar from "./main/TopicTopBar";
import TopicTable from "./main/TopicTable";

const TopicScreen = () => {
  return (
    <View style={styles.container}>
      <TopicTopBar />
      <TopicTable />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default TopicScreen;
