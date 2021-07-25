import { Button, Layout } from "@ui-kitten/components";
import { EditIcon, PlusIcon } from "components/icons";
import MyModal from "components/MyModal";
import React from "react";
import i18n from "utils/i18n";

export const CreateFormButton = ({ form, data, callBack, props }) => {
  const [createFormVisible, setCreateFormVisible] = React.useState(false);

  const modalCreateFormProps = {
    ...form,
    visible: createFormVisible,
    cancel: () => setCreateFormVisible(false),
    body: () => form.body(data),
    submit: async () => {
      try {
        let response = await form.submit();
        if (callBack) callBack(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  };

  return (
    <Layout>
      <MyModal {...modalCreateFormProps} />

      <Button
        style={{ margin: 5 }}
        status="primary"
        size="small"
        accessoryRight={data ? EditIcon : PlusIcon}
        onPress={() => setCreateFormVisible(true)}
        {...props}
      >
        {i18n.t(data ? form.update : form.create)}
      </Button>
    </Layout>
  );
};
