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
import {
  dimensionService,
  languageService,
  navService,
  toastService,
} from "service";
import i18n from "utils/i18n";
import userService from "utils/userService";

const TopNav = () => {
  const [lang, setLang] = React.useState(i18n.languages);

  React.useEffect(() => {
    languageService.listeners.push(setLang);
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
  const [dimensions, setDimensions] = React.useState({ width: 300 });
  const [login, setLogin] = React.useState();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    userService.loginListeners.push(setLogin);
    setLogin(localStorage.login);

    dimensionService.subscribe(setDimensions);
    setDimensions(dimensionService.getState());
  }, []);

  const renderPersonAvt = () => {
    return (
      <TopNavigationAction icon={AvatarIcon} onPress={() => setVisible(true)} />
    );
  };

  return (
    <Layout style={{ flexDirection: "row", backgroundColor: "transparent" }}>
      {dimensions.width > 600 && <SwitchLanguage status="control" />}
      {login && (
        <Popover
          visible={visible}
          anchor={renderPersonAvt}
          onBackdropPress={() => setVisible(false)}
        >
          <Layout style={{ backgroundColor: "transparent" }}>
            {dimensions.width <= 600 && <SwitchLanguage paddingRight={25} />}
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

const SwitchLanguage = ({ status, paddingRight }) => {
  const [lang, setLang] = React.useState(i18n.languages);

  React.useEffect(() => {
    languageService.notify(lang);
  }, [lang]);

  return (
    <Layout
      style={{
        flexDirection: "row",
        backgroundColor: "transparent",
        padding: 3,
        paddingRight: paddingRight,
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
    toastService.listeners.push(setLog);
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
