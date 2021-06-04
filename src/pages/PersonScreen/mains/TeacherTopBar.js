import { Button, Layout } from "@ui-kitten/components";
import { TeacherForm } from "components/form";
import { PlusIcon } from "components/Icons";
import MyModal from "components/Modal";
import React from "react";
import { StyleSheet } from "react-native";
import i18n from "utils/i18n";

const TeacherTopBar = ({ addNewRecord }) => {
  const [createFormVisible, setCreateFormVisible] = React.useState(false);

  const modalTopicCreateProps = {
    visible: createFormVisible,
    cancel: () => setCreateFormVisible(false),
    ...TeacherForm,
    submit: async () => {
      try {
        let response = await TeacherForm.submit();
        addNewRecord(response);
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
        onPress={() => setCreateFormVisible(true)}
      >
        {i18n.t("origin.new")}
      </Button>
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

export default TeacherTopBar;
