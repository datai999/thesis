import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

const PersonScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  return <Text style={{ textAlign: "center" }}>Version:5.31.01</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PersonScreen;
