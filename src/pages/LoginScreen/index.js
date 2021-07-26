import { useNavigation } from "@react-navigation/native";
import { Button, Text } from "@ui-kitten/components";
import { DownLoadIcon, GoogleIcon } from "components/icons";
import localStorage from "data/localStorage";
import React from "react";
import { ImageBackground, Platform, StyleSheet } from "react-native";
import { languageService } from "service";
import userService from "service/userService";
import { env, i18n } from "utils";

const Screen = () => {
  const navigation = useNavigation();
  const [lang, setLang] = React.useState(i18n.languages);

  React.useEffect(() => {
    const signIn = async () => {
      if (env.skipLogin) {
        await localStorage.setWhenLogin(
          env.skipLogin.email,
          env.skipLogin.code
        );
        await localStorage.getLocalStorage();
        navigation.navigate(env.skipLogin.screen, env.skipLogin.subScreen);
      } else if (localStorage.login) navigation.navigate(localStorage.screen);
    };
    signIn();
  }, []);

  React.useEffect(() => {
    languageService.onNextState(setLang);
  }, [lang]);

  function loginBtnPress() {
    userService.signInWithPopup();
  }

  return (
    <ImageBackground
      source={require("assets/img/cse2d.png")}
      style={styles.image}
      imageStyle={styles.imageStyle}
    >
      <Button
        appearance="outline"
        status="control"
        style={{ marginBottom: 40 }}
        onPress={() => navigation.navigate("present")}
      >
        Giới thiệu ứng dụng
      </Button>

      <Button
        appearance="outline"
        status="control"
        accessoryLeft={GoogleIcon}
        style={styles.loginBtn}
        onPress={loginBtnPress}
      >
        {i18n.t("login.signInWithGoogle")}
      </Button>

      {Platform.OS == "web" && (
        <Button
          appearance="outline"
          status="control"
          accessoryLeft={DownLoadIcon}
          style={styles.androidBtn}
          onPress={() => window.open(env.androidLinkDown, "_blank")}
        >
          {i18n.t("origin.downAndroidApp")}
        </Button>
      )}

      <Text style={styles.versionText}>
        {i18n.t("origin.version")}: {env.version}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginBtn: { marginBottom: 40 },
  androidBtn: {
    marginBottom: 120,
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
    opacity: 0.9,
  },
});

export default Screen;
