import AsyncStorage from "@react-native-async-storage/async-storage";

let localStorage = {};

const storageKey = ["isLogin", "email", "screen"];

export function getLocalStorage() {
  localStorage = storageKey.map((key) => {
    localStorage["get" + key.charAt(0).toUpperCase() + key.slice(1)] =
      AsyncStorage.getItem(key);
  });
  storageKey.map((key) => {
    AsyncStorage.getItem(key).then((value) => {
      localStorage[key] = value;
    });
  });
}

export default localStorage;
