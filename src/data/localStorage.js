import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from "lodash";

let localStorage = {
  getLocalStorage: getLocalStorage,
  setWhenLogin: setWhenLogin,
  table: {},
  function: {
    set: set,
    setTableVisible,
  },
};

const storageKey = ["login", "email", "code", "screen", "table"];

export function set(key, value) {
  AsyncStorage.setItem(key, JSON.stringify(value));
  localStorage[key] = value;
}

export function setTableVisible(tableName, visible) {
  _.set(localStorage, "table." + tableName + ".visible", visible);
  set("table", localStorage.table);
}

export function getLocalStorage() {
  storageKey.map((key) => {
    AsyncStorage.getItem(key).then((value) => {
      localStorage[key] = value;
    });
  });
}

export function setWhenLogin(email, code) {
  AsyncStorage.setItem("login", "true");
  AsyncStorage.setItem("email", email);
  AsyncStorage.setItem("code", code);
  AsyncStorage.setItem("screen", "topic");
}

export function removeWhenLogout() {
  AsyncStorage.removeItem("login");
  AsyncStorage.removeItem("email");
  AsyncStorage.removeItem("code");
  AsyncStorage.removeItem("screen");
}

export default localStorage;
