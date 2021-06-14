import firebase from "api/firebase";
import { navHolder } from "utils/nav";

let loginListeners = [];

let userStorage = {
  validEmail: false,
  isLogin: false,
  code: 1,
};

const actionCodeSettings = {
  url: "http://localhost:19006/",
  handleCodeInApp: true,
};

const login = (email) => {
  return firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings);
};

function notifyLogin() {
  userStorage.isLogin = true;
  loginListeners.forEach((listener) => listener(true));
}

function logout() {
  userStorage.isLogin = false;
  loginListeners.forEach((listener) => listener(false));
  navHolder.navigate("home");
}

export let user = {
  ...userStorage,
  loginListeners: loginListeners,
  login: login,
  logout: logout,
  notifyLogin: notifyLogin,
};
