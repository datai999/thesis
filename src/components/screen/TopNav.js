import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { MenuIcon, SettingIcon } from "components/Icons";
import React from "react";
import i18n from "utils/i18n";
import { navHolder } from "utils/nav";

const renderMenuAction = () => {
  return (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navHolder.toggleDrawer()}
    />
  );
};

const renderSettingsAction = () => {
  return (
    <TopNavigationAction
      icon={SettingIcon}
      onPress={() => navHolder.navigate("setting")}
    />
  );
};

const TopNav = ({ title }) => {
  return (
    <TopNavigation
      title={i18n.t(title)}
      alignment="center"
      accessoryLeft={renderMenuAction}
      accessoryRight={renderSettingsAction}
    />
  );
};

export default TopNav;
