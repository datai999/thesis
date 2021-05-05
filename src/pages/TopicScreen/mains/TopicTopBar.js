import { Button, Input, Layout } from "@ui-kitten/components";
import TopicApi from "api/topic/TopicApi";
import TopicCreateForm from "components/form/TopicCreateForm";
import { PlusIcon, SearchIcon } from "components/Icons";
import MyModal from "components/Modal";
import React from "react";
import { StyleSheet } from "react-native";

const TopicTopBar = () => {
  const [value, setValue] = React.useState("");
  const [topicCreateVisible, setTopicCreateVisible] = React.useState(false);

  const topicForm = {};
  const modalTopicCreateProps = {
    visible: topicCreateVisible,
    header: "Create topic",
    body: TopicCreateForm(topicForm),
    cancel: () => setTopicCreateVisible(false),
    submit: () => TopicApi.create(topicForm),
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
