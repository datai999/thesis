import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase, { provider } from "api/firebase";
import TeacherApi from "api/person/TeacherApi";
import env from "src/env";
import { emailTail, i18n, navService, toastHolder } from "utils";
import NavHolder from "utils/nav";

let loginListeners = [];

let userStorage = {
  validEmail: false,
  isLogin: env.isLogin,
  code: false,
};

function navToHome(email) {
  if (email.substring(email.indexOf("@")) != emailTail) {
    toastHolder.error(email + i18n.t("toast.email.notHcmut"), { email });
    return;
  }

  TeacherApi.postExample({ email: email }).then((response) => {
    userStorage.code = response[0]?.code;
    notifyLogin();
    navService.navigate("topic");
  });
}

function notifyLogin() {
  userStorage.isLogin = true;
  loginListeners.forEach((listener) => listener(true));
}

function signInWithPopup() {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      userStorage.loginResult = result;
      userStorage.isLogin = true;
      AsyncStorage.setItem("email", result.user.email);
      AsyncStorage.setItem("isLogin", true);
      navToHome(result.user.email);
    })
    .catch((error) => {
      toastHolder.errorCode(error.code, error);
    });
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      AsyncStorage.removeItem("email");
      AsyncStorage.removeItem("isLogin");
      AsyncStorage.removeItem("screen");
      loginListeners.forEach((listener) => listener(false));
      NavHolder.get().navigate("login");
      toastHolder.info("toast.login.success");
    })
    .catch((error) => {
      toastHolder.errorCode(error.code, error);
    });
}

export let user = {
  ...userStorage,
  loginListeners: loginListeners,
  sendLoginEmail: sendLoginEmail,
  loginWithEmailLink: loginWithEmailLink,
  createUserWithEmailPassword: createUserWithEmailPassword,
  loginWithEmailPassword: loginWithEmailPassword,
  signInWithPopup: signInWithPopup,
  logout: logout,
  navToHome: navToHome,
};
