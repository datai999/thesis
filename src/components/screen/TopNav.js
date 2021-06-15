import {
  Button,
  Layout,
  Popover,
  Text,
  Toggle,
  TopNavigation,
  TopNavigationAction
} from "@ui-kitten/components";
import AxiosClient from "api/AxiosClient";
import { AvatarIcon, ExternalLinkIcon, MenuIcon } from "components/Icons";
import React from "react";
import i18n from "utils/i18n";
import { navHolder } from "utils/nav";
import { user } from "utils/user";

const renderMenuAction = () => {
  const [login, setLogin] = React.useState(user.isLogin);

  React.useEffect(() => {
    user.loginListeners.push(setLogin);
  }, []);

  if (!login) return null;
  return (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navHolder.toggleDrawer()}
    />
  );
};

const renderPersonAction = () => {
  const [login, setLogin] = React.useState(user.isLogin);
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
      <Button
        size="small"
        appearance="ghost"
        accessoryRight={ExternalLinkIcon}
        onPress={() => {
          setVisible(false);
          user.logout();
        }}
      >
        {i18n.t("origin.logout")}
      </Button>
    </Popover>
  );
};

const renderRightAction = () => {
  const [english, setEnglish] = React.useState(i18n.languages == "en");

  return (
    <Layout style={{ flexDirection: "row", backgroundColor: "transparent" }}>
      <Text style={{ margin: 10 }}>English</Text>
      <Toggle
        status="control"
        checked={english}
        onChange={(nextCheck) => {
          i18n.changeLanguage(nextCheck ? "en" : "vi").then(() => {
            AxiosClient.defaults.headers.Lang = i18n.language;
            setEnglish(nextCheck);
          });
        }}
      ></Toggle>
      {renderPersonAction()}
    </Layout>
  );
};

const TopNav = () => {
  return (
    <TopNavigation
      style={{ backgroundColor: "#3366FF" }}
      title={i18n.t("origin.appName")}
      alignment="center"
      accessoryLeft={renderMenuAction}
      accessoryRight={renderRightAction}
    />
  );
};

export default TopNav;
