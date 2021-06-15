import { Platform } from "react-native";

let isLogin = Platform.OS == "android" ? true : false;

const local = {
  domain: "http://localhost:19006/",
  baseURL: "http://192.168.15.112:8080/api",
  version: "6.15.18",
  isLogin: isLogin,
  initialRouteName: isLogin ? "topic" : "home",
};

const staging = {
  ...local,
  domain: "https://datai999.github.io/thesis/",
  baseURL: "https://datai-thesis.herokuapp.com/api",
  isLogin: false,
  initialRouteName: "home",
};

export default staging;
