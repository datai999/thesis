import { useNavigation } from "@react-navigation/native";
import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { MenuIcon, SettingIcon } from "components/Icons";
import React from "react";
import i18n from "utils/i18n";

const renderMenuAction = () => {
  const navigation = useNavigation();
  return (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

const renderSettingsAction = () => {
  const navigation = useNavigation();

  return (
    <TopNavigationAction
      icon={SettingIcon}
      onPress={() => navigation.navigate("setting")}
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
