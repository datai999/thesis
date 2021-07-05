import AsyncStorage from "@react-native-async-storage/async-storage";

let localStorage = {};

const storageKey = ["login", "email", "code", "screen"];

export function getLocalStorage() {
  storageKey.map((key) => {
    AsyncStorage.getItem(key).then((value) => {
      localStorage[key] = value;
    });
  });
}

export function setWhenLogin(email, code) {
  AsyncStorage.setItem("login", true);
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
