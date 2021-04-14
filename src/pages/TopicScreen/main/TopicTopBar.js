import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Input, Button } from "@ui-kitten/components";

import { SearchIcon, PlusIcon } from "../../../components/icons";

const TopicTopBar = () => {
  const [value, setValue] = React.useState("");

  return (
    <View style={styles.container}>
      <Button
        style={styles.btnNew}
        status="primary"
        size="small"
        accessoryRight={PlusIcon}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
  },
  btnNew: {
    marginHorizontal: 10,
  },
  input: {
    width: "50%",
  },
});

export default TopicTopBar;
