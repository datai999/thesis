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

const actionCodeSettings = {
  url: env.domain,
  handleCodeInApp: true,
};

function sendLoginEmail(email) {
  return firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      AsyncStorage.setItem("emailForSignIn", email);
    });
}

function navToHome(email) {
  if (email.substring(email.indexOf("@")) != emailTail) {
    toastHolder.error(email + i18n.t("toast.email.notHcmut"), { email });
    return;
  }

  console.log("her");

  TeacherApi.postExample({ email: email }).then((response) => {
    userStorage.code = response[0]?.code;
    notifyLogin();
    navService.navigate("topic");
  });
}

function loginWithEmailLink(email) {
  firebase
    .auth()
    .signInWithEmailLink(email, window.location.href)
    .then((result) => {
      console.log("sign in result");
      console.log(result);
      AsyncStorage.removeItem("emailForSignIn");
      navToHome(email);
    })
    .catch((error) => {
      // TODO throw login error
      console.log("signInWithEmailLink error");
      console.log(error);
      alert("signInWithEmailLink error" + error);
    });
}

function createUserWithEmailPassword(email, password) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userStorage.user = userCredential.user;
      console.log("createUserWithEmailPassword");
      console.log(userStorage.user);
    })
    .catch((error) => toastHolder.errorCode(error.code, error));
}

function loginWithEmailPassword(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      userStorage.credential = userCredential.user;
      userStorage.isLogin = true;
      navToHome(email);
    })
    .catch((error) => toastHolder.errorCode(error.code, error));
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

function notifyLogin() {
  userStorage.isLogin = true;
  loginListeners.forEach((listener) => listener(true));
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
