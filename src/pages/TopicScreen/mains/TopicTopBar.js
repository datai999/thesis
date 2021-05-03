import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Layout, Input, Button } from "@ui-kitten/components";

import MyModal from "components/Modal";
import TopicCreateProps from "components/form/topicCreateForm/Props";
import { SearchIcon, PlusIcon } from "components/Icons";

const TopicTopBar = ({ callBack }) => {
  const [value, setValue] = React.useState("");
  const [topicCreateVisible, setTopicCreateVisible] = React.useState(false);

  const modalTopicCreateProps = {
    visible: topicCreateVisible,
    cancel: () => setTopicCreateVisible(false),
    ...TopicCreateProps,
  };

  return (
    <Layout style={styles.container}>
      <Button
        style={styles.btnNew}
        status="primary"
        size="small"
        accessoryRight={PlusIcon}
        onPress={() => setTopicCreateVisible(true)}
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

      <MyModal {...modalTopicCreateProps} />
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
