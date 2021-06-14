import { TopNavigation, TopNavigationAction } from "@ui-kitten/components";
import { AvatarIcon, MenuIcon } from "components/Icons";
import React from "react";
import i18n from "utils/i18n";
import { navHolder } from "utils/nav";
import { user } from "utils/user";

const renderMenuAction = () => {
  return (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navHolder.toggleDrawer()}
    />
  );
};

const renderPersonAction = () => {
  const [login, setLogin] = React.useState(false);

  React.useEffect(() => {
    user.loginListeners.push(setLogin);
  }, []);

  if (!login) return null;
  return (
    <TopNavigationAction
      icon={AvatarIcon}
      onPress={() => navHolder.navigate("home")}
    />
  );
};

const TopNav = ({ title = "origin.appName" }) => {
  return (
    <TopNavigation
      style={{ backgroundColor: "#3366FF" }}
      title={i18n.t(title)}
      alignment="center"
      accessoryLeft={renderMenuAction}
      accessoryRight={renderPersonAction}
    />
  );
};

export default TopNav;
