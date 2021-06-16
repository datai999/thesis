import { Button, Layout, Text } from "@ui-kitten/components";
import { DownLoadIcon } from "components/Icons";
import { MyInput } from "components/Input";
import React from "react";
import { ImageBackground, Platform, StyleSheet } from "react-native";
import { createProps, emailTail, env, i18n, langHolder, user } from "utils";

const propStore = createProps();

const Screen = () => {
  const [lang, setLang] = React.useState(i18n.languages);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    langHolder.listeners.push(setLang);
  }, [lang]);

  React.useEffect(() => {}, []);

  const emailProps = {
    ...propStore.inputMail("login.email", -120),
    value: email,
    style: styles.input,
    callBack: (nextValue) => setEmail(nextValue),
  };

  const passwordProps = {
    ...propStore.input("login.password"),
    value: password,
    secureTextEntry: true,
    style: styles.input,
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
        <Layout style={styles.form}>
          <MyInput {...emailProps} />
          <MyInput {...passwordProps} />
          <Layout style={styles.row}>
            <Button style={styles.btn} onPress={loginBtnPress}>
              {i18n.t("login.register")}
            </Button>
            <Button style={styles.btn} onPress={loginBtnPress}>
              {i18n.t("login.login")}
            </Button>
          </Layout>
        </Layout>

        {Platform.OS == "web" && (
          <Button
            size="small"
            appearance="outline"
            status="control"
            accessoryLeft={DownLoadIcon}
            onPress={() => window.open(env.androidLinkDown, "_blank")}
            style={styles.androidBtn}
          >
            {i18n.t("origin.androidApp")}
          </Button>
        )}
      </Layout>

      <Text style={styles.versionText}>
        {i18n.t("origin.version")}: {env.version}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "transparent",
    width: 320,
    marginBottom: "16%",
  },
  input: { marginVertical: 5 },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
    marginTop: 20,
  },
  btn: {
    width: 130,
  },
  androidBtn: {
    marginBottom: "30%",
  },
  versionText: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    opacity: 0.8,
  },
});

export default Screen;
