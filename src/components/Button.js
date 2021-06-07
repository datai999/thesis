import { Button, Layout } from "@ui-kitten/components";
import { EditIcon, PlusIcon } from "components/Icons";
import MyModal from "components/Modal";
import React from "react";

export const CreateBtn = ({ form, data, callBack, props }) => {
  const [createFormVisible, setCreateFormVisible] = React.useState(false);

  const modalCreateFormProps = {
    ...form,
    visible: createFormVisible,
    cancel: () => setCreateFormVisible(false),
    body: () => form.body(data),
    submit: async () => {
      try {
        let response = await form.submit();
        callBack(response);
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
        // label={data ? form.update : form.create}
        {...props}
      >
        {data ? form.update : form.create}
      </Button>
    </Layout>
  );
};
