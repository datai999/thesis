import { useNavigation } from "@react-navigation/native";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { MenuIcon, SettingIcon } from "components/Icons";
import React from "react";
import i18n from "utils/i18n";

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
