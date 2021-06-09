import { useNavigation } from "@react-navigation/native";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { MenuIcon, SettingIcon } from "components/Icons";
import React from "react";

const renderSettingsAction = () => {
  return <TopNavigationAction icon={SettingIcon} />;
};

const renderMenuAction = () => {
  const navigation = useNavigation();
  return (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

const TopNav = () => {
  return (
    <TopNavigation
      title="Thesis Application"
      alignment="center"
      accessoryLeft={renderMenuAction}
      accessoryRight={renderSettingsAction}
    />
  );
};

export default TopNav;
