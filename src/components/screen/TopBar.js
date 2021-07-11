import { Button } from "@ui-kitten/components";
import { CreateBtn } from "components/Button";
import { BrushIcon, FunnelIcon } from "components/icons";
import React from "react";
import { ScrollView } from "react-native";
import { i18n } from "utils";

const TopBar = ({
  form,
  addNewRecord,
  filterVisible,
  setFilterVisible,
  overTopBar,
}) => {
  const commonBtnProps = {
    style: { margin: 5 },
    status: "primary",
    size: "small",
  };

  return (
    <ScrollView
      horizontal={true}
      style={{ maxWidth: "100%" }}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={[{ flexDirection: "row" }]}
    >
      <CreateBtn form={form} callBack={addNewRecord} />
      <Button
        {...commonBtnProps}
        accessoryRight={FunnelIcon}
        onPress={() => setFilterVisible(!filterVisible)}
      >
        {i18n.t("origin.filter")}
      </Button>

      {overTopBar && overTopBar()}

      <Button
        {...commonBtnProps}
        accessoryRight={BrushIcon}
        onPress={() => console.log("edit.layout")}
      >
        {i18n.t("origin.edit.layout")}
      </Button>
    </ScrollView>
  );
};

export default TopBar;
