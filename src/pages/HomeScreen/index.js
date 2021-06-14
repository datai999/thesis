import { Button, Layout, Text } from "@ui-kitten/components";
import firebase from "api/firebase";
import { MyInput } from "components/Input";
import React from "react";
import { StyleSheet } from "react-native";
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
  const [email, setEmail] = React.useState(
    getHeadMail(window.localStorage.getItem("emailForSignIn"))
  );
  const [confirmEmail, setConfirmEmail] = React.useState(false);

  React.useEffect(() => {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      if (window.localStorage.getItem("emailForSignIn") != email + emailTail) {
        setConfirmEmail(true);
        return;
      }
      user.loginWithEmailLink(email + emailTail);
    } else {
      window.localStorage.removeItem("emailForSignIn");
    }
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
    }
  }

  return (
    <Layout style={styles.container}>
      {confirmEmail && (
        <Text style={{ margin: 15 }} category="h6">
          {i18n.t("login.emailConfirm")}
        </Text>
      )}
      <MyInput {...emailProps} />
      <Button onPress={loginBtnPress}>{i18n.t("origin.login")}</Button>
      <Text style={styles.versionText}>
        {i18n.t("origin.version")}: {env.version}
      </Text>
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
