import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "api/firebase";
import TeacherApi from "api/person/TeacherApi";
import env from "src/env";
import NavHolder from "utils/nav";
import { toastHolder } from "./holder";

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
  TeacherApi.postExample({ email: email }).then((response) => {
    userStorage.code = response[0]?.code;
    notifyLogin();
    if (!user.code) {
      NavHolder.setPersonMode("teacher");
      NavHolder.get().navigate("person");
    } else {
      NavHolder.get().navigate("topic");
    }
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
    .catch((error) => {
      console.log("createUserWithEmailPassword");
      console.log(error);
      alert(error.message);
    });
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
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          toastHolder.error("toast.email.invalid", error);
          break;
        case "auth/wrong-password":
          toastHolder.error("toast.password.invalid", error);
          break;
        default:
          toastHolder.error(error.message, error);
      }
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
      console.log("sign out success");
      userStorage.isLogin = false;
      loginListeners.forEach((listener) => listener(false));
      NavHolder.get().navigate("home");
    })
    .catch((error) => {
      console.log("sign out error");
      console.log(error);
      alert("sign out error" + error);
    });
}

export let user = {
  ...userStorage,
  loginListeners: loginListeners,
  sendLoginEmail: sendLoginEmail,
  loginWithEmailLink: loginWithEmailLink,
  createUserWithEmailPassword: createUserWithEmailPassword,
  loginWithEmailPassword: loginWithEmailPassword,
  logout: logout,
};
