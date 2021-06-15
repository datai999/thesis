import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Layout, Text } from "@ui-kitten/components";
import firebase from "api/firebase";
import { DownLoadIcon } from "components/Icons";
import { MyInput } from "components/Input";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import env from "src/env";
import { createProps } from "utils";
import i18n from "utils/i18n";
import { user } from "utils/user";

const propStore = createProps();
const emailTail = "@hcmut.edu.vn";

function getHeadMail(fullMail) {
  if (!fullMail) return "";
  let mailLength = fullMail.length;
  return fullMail.substring(0, mailLength - emailTail.length);
}

const HomeScreen = () => {
  const [email, setEmail] = React.useState();
  const [confirmEmail, setConfirmEmail] = React.useState(false);
  const [emailSend, setEmailSend] = React.useState("");

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
    ...propStore.input("login.email"),
    value: email,
    style: styles.email,
    accessoryRight: () => <Text>{emailTail}</Text>,
    callBack: (nextValue) => setEmail(nextValue),
  };

  function loginBtnPress() {
    if (confirmEmail) {
      user.loginWithEmailLink(email + emailTail);
    } else {
      user.sendLoginEmail(email + emailTail);
      setEmailSend(email + emailTail);
    }
  }

  return (
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
      <Button onPress={loginBtnPress}>{i18n.t("login.login")}</Button>
      <Text style={styles.versionText}>
        {i18n.t("origin.version")}: {env.version}
      </Text>

      {Platform.OS == "web" && (
        <Button
          size="tiny"
          appearance="outline"
          accessoryLeft={DownLoadIcon}
          onPress={() => window.open(env.androidLinkDown, "_blank")}
          style={{ marginTop: 30 }}
        >
          {i18n.t("origin.androidApp")}
        </Button>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 200,
  },
  email: {
    margin: 15,
  },
  versionText: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
});

export default HomeScreen;
