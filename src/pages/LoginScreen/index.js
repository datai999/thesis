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

export default Screen;
