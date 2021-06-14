import {
  Button,
  Popover,
  TopNavigation,
  TopNavigationAction
} from "@ui-kitten/components";
import { AvatarIcon, ExternalLinkIcon, MenuIcon } from "components/Icons";
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
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    user.loginListeners.push(setLogin);
  }, []);

  const renderPersonAvt = () => {
    return (
      <TopNavigationAction icon={AvatarIcon} onPress={() => setVisible(true)} />
    );
  };

  if (!login) return null;
  return (
    <Popover
      visible={visible}
      anchor={renderPersonAvt}
      onBackdropPress={() => setVisible(false)}
    >
      <Button size="small" appearance="ghost" accessoryRight={ExternalLinkIcon}>
        {i18n.t("origin.logout")}
      </Button>
    </Popover>
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
