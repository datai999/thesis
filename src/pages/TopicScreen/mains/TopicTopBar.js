import { Button, Input, Layout } from "@ui-kitten/components";
import TopicCreateForm from "components/form/TopicCreateForm";
import { PlusIcon, SearchIcon } from "components/Icons";
import MyModal from "components/Modal";
import React from "react";
import { StyleSheet } from "react-native";
import i18n from "utils/i18n";

const TopicTopBar = ({ addNewTopic }) => {
  const [value, setValue] = React.useState("");
  const [topicCreateVisible, setTopicCreateVisible] = React.useState(false);

  const modalTopicCreateProps = {
    visible: topicCreateVisible,
    cancel: () => setTopicCreateVisible(false),
    ...TopicCreateForm,
    submit: async () => {
      try {
        let response = await TopicCreateForm.submit();
        addNewTopic(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
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
        {i18n.t("origin.new")}
      </Button>
      <Input
        style={styles.input}
        value={value}
        placeholder={i18n.t("origin.filter&Search")}
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
