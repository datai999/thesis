import { Button } from "@ui-kitten/components";
import { CreateFormButton } from "components/Button";
import { BrushIcon, FunnelIcon, PlusIcon } from "components/icons";
import SettingTable from "components/table/setting";
import React from "react";
import { ScrollView } from "react-native";
import { i18n } from "utils";

const commonBtnProps = {
  style: { margin: 5 },
  status: "primary",
  size: "small",
};

const TopBar = ({
  fields,
  form,
  addNewRecord,
  filterVisible,
  setFilterVisible,
  overTopBar,
  ...props
}) => {
  const [settingTable, setSettingTable] = React.useState(false);

  return (
    <ScrollView
      horizontal={true}
      style={{ maxWidth: "100%" }}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={[{ flexDirection: "row" }]}
    >
      {props.screenName ? (
        <Button
          style={{ margin: 5 }}
          status="primary"
          size="small"
          accessoryRight={PlusIcon}
          onPress={props.createButtonPress}
        >
          {i18n.t(props.newRecordLabel)}
        </Button>
      ) : (
        <CreateFormButton form={form} callBack={addNewRecord} />
      )}

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
        onPress={() => setSettingTable(true)}
      >
        {i18n.t("origin.edit.layout")}
      </Button>

      <SettingTable
        visible={settingTable}
        setVisible={setSettingTable}
        fields={fields}
        setFields={props.setFields}
      />
    </ScrollView>
  );
};

export default TopBar;
