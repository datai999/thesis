import {
  Button,
  Divider,
  Layout,
  Modal,
  Popover,
  Text,
  Toggle,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from "@ui-kitten/components";
import AxiosClient from "api/AxiosClient";
import {
  AlertTriangleIcon,
  AvatarIcon,
  CheckMarkCircle2,
  CloseCircleIcon,
  ExternalLinkIcon,
  InfoIcon,
  MenuIcon,
} from "components/icons";
import { localStorage } from "data";
import React from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { langHolder, navService, toastHolder, userService } from "utils";
import i18n from "utils/i18n";

const TopNav = () => {
  const [lang, setLang] = React.useState(i18n.languages);

  React.useEffect(() => {
    langHolder.listeners.push(setLang);
  }, [lang]);

  return (
    <TopNavigation
      style={{ backgroundColor: useTheme()["color-primary-default"] }}
      title={i18n.t("origin.appName")}
      alignment="center"
      accessoryLeft={renderMenuAction}
      accessoryRight={renderRightAction}
    />
  );
};

const renderMenuAction = () => {
  const [login, setLogin] = React.useState();

  React.useEffect(() => {
    userService.loginListeners.push(setLogin);
    setLogin(localStorage.login);
  }, []);

  if (!login) return null;
  return (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navService.nav.toggleDrawer()}
    />
  );
};

const renderRightAction = () => {
  const [login, setLogin] = React.useState();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    userService.loginListeners.push(setLogin);
    setLogin(localStorage.login);
  }, []);

  const renderPersonAvt = () => {
    return (
      <TopNavigationAction icon={AvatarIcon} onPress={() => setVisible(true)} />
    );
  };

  return (
    <Layout style={{ flexDirection: "row", backgroundColor: "transparent" }}>
      <SwitchLanguage status="control" />
      {login && (
        <Popover
          visible={visible}
          anchor={renderPersonAvt}
          onBackdropPress={() => setVisible(false)}
          // style={{ backgroundColor: "transparent" }}
        >
          <Layout style={{ backgroundColor: "transparent" }}>
            <SwitchLanguage />
            <Divider />
            <Button
              appearance="ghost"
              accessoryRight={ExternalLinkIcon}
              onPress={() => {
                setVisible(false);
                userService.logout();
              }}
            >
              {i18n.t("origin.logout")}
            </Button>
          </Layout>
        </Popover>
      )}
    </Layout>
  );
};

const SwitchLanguage = ({ status }) => {
  const [lang, setLang] = React.useState(i18n.languages);

  React.useEffect(() => {
    langHolder.notify(lang);
  }, [lang]);

  return (
    <Layout
      style={{
        flexDirection: "row",
        backgroundColor: "transparent",
        padding: 3,
        paddingRight: 25,
      }}
    >
      <Toggle
        status={status}
        checked={lang == "en"}
        onChange={(nextCheck) => {
          i18n.changeLanguage(nextCheck ? "en" : "vi").then(() => {
            AxiosClient.defaults.headers.Lang = i18n.language;
            setLang(nextCheck ? "en" : "vi");
          });
        }}
      >
        <Text>English</Text>
      </Toggle>
    </Layout>
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
      if (log.type != "info" && log.type != "success") {
        console.log(log);
      }
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
