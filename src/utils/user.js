import { navHolder } from "utils/nav";

let loginListeners = [];

let userStorage = {
  isLogin: false,
  code: 1,
};

function login() {
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
};
