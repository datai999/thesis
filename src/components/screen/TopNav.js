import {
  Button,
  Layout,
  Modal,
  Popover,
  Text,
  Toggle,
  TopNavigation,
  TopNavigationAction
} from "@ui-kitten/components";
import AxiosClient from "api/AxiosClient";
import {
  AlertTriangleIcon,
  AvatarIcon,
  CheckMarkCircle2,
  CloseCircleIcon,
  ExternalLinkIcon,
  InfoIcon,
  MenuIcon
} from "components/icons";
import { localStorage } from "data";
import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { langHolder, navService, toastHolder, userService } from "utils";
import i18n from "utils/i18n";

const renderMenuAction = () => {
  const [login, setLogin] = React.useState();

  React.useEffect(() => {
    userService.loginListeners.push(setLogin);
    localStorage.getIsLogin.then((response) => setLogin(response));
  }, []);

  if (!login) return null;
  return (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navService.nav.toggleDrawer()}
    />
  );
};

const renderPersonAction = () => {
  const [login, setLogin] = React.useState();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    userService.loginListeners.push(setLogin);
    localStorage.getIsLogin.then((response) => setLogin(response));
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
          userService.logout();
        }}
      >
        {i18n.t("origin.logout")}
      </Button>
    </Popover>
  );
};

const renderRightAction = () => {
  const [lang, setLang] = React.useState(i18n.languages);

  React.useEffect(() => {
    langHolder.notify(lang);
  }, [lang]);

  return (
    <Layout style={{ flexDirection: "row", backgroundColor: "transparent" }}>
      <Text style={{ margin: 10 }}>English</Text>
      <Toggle
        status="control"
        checked={lang == "en"}
        onChange={(nextCheck) => {
          i18n.changeLanguage(nextCheck ? "en" : "vi").then(() => {
            AxiosClient.defaults.headers.Lang = i18n.language;
            setLang(nextCheck ? "en" : "vi");
          });
        }}
      ></Toggle>
      {renderPersonAction()}
    </Layout>
  );
};

const TopNav = () => {
  const [lang, setLang] = React.useState(i18n.languages);

  React.useEffect(() => {
    langHolder.listeners.push(setLang);
  }, [lang]);

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

const ToolTopNav = () => {
  const [visible, setVisible] = React.useState(false);
  const [log, setLog] = React.useState({ type: "info", msg: "" });
  const animationRef = React.useRef();
  const timerRef = React.useRef(null);

  const animationEnd = (time = 500) =>
    animationRef.current?.zoomOut(time).then(() => setVisible(false));

  React.useEffect(() => {
    toastHolder.listeners.push(setLog);
  }, []);

  React.useEffect(() => {
    if (log.msg?.length > 0) {
      console.log(log);
      setVisible(true);
      timerRef.current = setTimeout(animationEnd, 2500);
    }
  }, [log]);

  function renderIcon(props) {
    switch (log.type) {
      case "info":
        return <InfoIcon {...props} />;
      case "success":
        return <CheckMarkCircle2 {...props} />;
      case "warning":
        return <AlertTriangleIcon {...props} />;
      case "danger":
        return <CloseCircleIcon {...props} />;
    }
  }

  return (
    <Layout>
      {TopNav()}
      <Modal
        visible={visible}
        style={styles.toastModal}
        onBackdropPress={() => {
          clearTimeout(timerRef.current);
          animationEnd(100);
        }}
      >
        <Animatable.View animation="fadeInDownBig" ref={animationRef}>
          <Button
            status={log.type}
            appearance="ghost"
            accessoryLeft={renderIcon}
            style={{ marginVertical: -25, marginLeft: -30, marginRight: -20 }}
          >
            {i18n.t(log.msg)}
          </Button>
        </Animatable.View>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  toastModal: {
    flexDirection: "row",
    position: "absolute",
    top: "10%",
  },
});

export default ToolTopNav;
