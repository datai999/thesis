import { Button, Layout } from "@ui-kitten/components";
import { PlusIcon } from "components/Icons";
import MyModal from "components/Modal";
import React from "react";
import i18n from "utils/i18n";

const TopBar = ({ form, addNewRecord, overTopBar }) => {
  const [createFormVisible, setCreateFormVisible] = React.useState(false);

  const modalTopicCreateProps = {
    visible: createFormVisible,
    cancel: () => setCreateFormVisible(false),
    ...form,
    submit: async () => {
      try {
        let response = await form.submit();
        addNewRecord(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  };

  return (
    <Layout style={{ flexDirection: "row" }}>
      <MyModal {...modalTopicCreateProps} />

      <Button
        style={{ marginHorizontal: 10 }}
        status="primary"
        size="small"
        accessoryRight={PlusIcon}
        onPress={() => setCreateFormVisible(true)}
      >
        {i18n.t("origin.new")}
      </Button>

      {overTopBar && overTopBar()}
    </Layout>
  );
};

export default TopBar;
