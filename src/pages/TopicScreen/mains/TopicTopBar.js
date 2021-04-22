import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Layout, Input, Button } from "@ui-kitten/components";

import TopicCreate from "./TopicCreate";

import { SearchIcon, PlusIcon } from "components/Icons";

const TopicTopBar = () => {
  const [value, setValue] = React.useState("");
  const [createVisible, setCreateVisible] = React.useState(true);

  return (
    <Layout style={styles.container}>
      <Button
        style={styles.btnNew}
        status="primary"
        size="small"
        accessoryRight={PlusIcon}
        onPress={() => setCreateVisible(true)}
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

      <TopicCreate
        createVisible={createVisible}
        setCreateVisible={setCreateVisible}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    width: "50%",
  },
  btnNew: {
    marginHorizontal: 10,
  },
  input: {
    width: "80%",
  },
});

export default TopicTopBar;
