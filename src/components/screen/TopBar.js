import { Layout } from "@ui-kitten/components";
import { CreateBtn } from "components/Button";
import React from "react";

const TopBar = ({ form, addNewRecord, overTopBar }) => {
  return (
    <Layout style={{ flexDirection: "row" }}>
      <CreateBtn form={form} callBack={addNewRecord} />

      {overTopBar && overTopBar()}
    </Layout>
  );
};

export default TopBar;
