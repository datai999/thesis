import { Button, Layout } from "@ui-kitten/components";
import { CreateBtn } from "components/Button";
import { FunnelIcon } from "components/icons";
import React from "react";
import { i18n } from "utils";

const TopBar = ({
  form,
  addNewRecord,
  filterVisible,
  setFilterVisible,
  overTopBar,
}) => {
  return (
    <Layout style={{ flexDirection: "row" }}>
      <CreateBtn form={form} callBack={addNewRecord} />
      <Button
        style={{ margin: 5 }}
        status="primary"
        size="small"
        accessoryRight={FunnelIcon}
        onPress={() => setFilterVisible(!filterVisible)}
      >
        {i18n.t("origin.filter")}
      </Button>

      {overTopBar && overTopBar()}
    </Layout>
  );
};

export default TopBar;
