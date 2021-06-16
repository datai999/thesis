import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Layout, Text } from "@ui-kitten/components";
import firebase from "api/firebase";
import { DownLoadIcon } from "components/Icons";
import { MyInput } from "components/Input";
import React from "react";
import { ImageBackground, Platform, StyleSheet } from "react-native";
import env from "src/env";
import { createProps, emailTail, getHeadMail, langHolder } from "utils";
import i18n from "utils/i18n";
import { user } from "utils/user";

const propStore = createProps();

const HomeScreen = () => {
  const [email, setEmail] = React.useState();
  const [confirmEmail, setConfirmEmail] = React.useState(false);
  const [emailSend, setEmailSend] = React.useState("");
  const [lang, setLang] = React.useState(i18n.languages);
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    langHolder.listeners.push(setLang);
  }, [lang]);

  React.useEffect(() => {
    const login = async () => {
      let emailForSignIn = await AsyncStorage.getItem("emailForSignIn");
      setEmail(getHeadMail(emailForSignIn));
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        if (emailForSignIn.length <= emailTail.length) {
          setConfirmEmail(true);
          return;
        }
        user.loginWithEmailLink(emailForSignIn);
      } else {
        AsyncStorage.removeItem("emailForSignIn");
      }
    };
    login();
  }, []);

  const emailProps = {
    ...propStore.inputMail("login.email", -120),
    value: email,
    style: styles.email,
    callBack: (nextValue) => setEmail(nextValue),
  };

  const passwordProps = {
    ...propStore.input("login.password"),
    value: password,
    secureTextEntry: true,
    style: styles.password,
    callBack: (nextValue) => setPassword(nextValue),
  };

  function loginBtnPress() {
    user.loginWithEmailPassword(email + emailTail, password);
  }

  return (
    <ImageBackground
      source={require("assets/img/cse2d.png")}
      style={styles.image}
      imageStyle={styles.imageStyle}
    >
      <Layout style={styles.container}>
        {emailSend.length > emailTail.length && (
          <Text category="s1">{i18n.t("login.emailCheck") + emailSend}</Text>
        )}
        {confirmEmail && (
          <Text style={{ margin: 15 }} category="h6">
            {i18n.t("login.emailConfirm")}
          </Text>
        )}
        <MyInput {...emailProps} />
        <MyInput {...passwordProps} />
        <Button onPress={loginBtnPress}>{i18n.t("login.login")}</Button>
        <Text style={styles.versionText}>
          {i18n.t("origin.version")}: {env.version}
        </Text>

        {Platform.OS == "web" && (
          <Button
            size="small"
            appearance="outline"
            status="control"
            accessoryLeft={DownLoadIcon}
            onPress={() => window.open(env.androidLinkDown, "_blank")}
            style={{ marginTop: 30 }}
          >
            {i18n.t("origin.androidApp")}
          </Button>
        )}
      </Layout>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 150,
    backgroundColor: "transparent",
  },
  email: { margin: 10, width: 320 },
  password: { margin: 10, width: 320 },
  versionText: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imageStyle: {
    opacity: 0.8,
  },
});

export default HomeScreen;
