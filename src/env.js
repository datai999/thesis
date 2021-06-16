import { Platform } from "react-native";

let isLogin = Platform.OS == "android" ? true : false;

const local = {
  domain: "http://localhost:19006/",
  baseURL: "http://192.168.15.112:8080/api",
  androidLinkDown:
    "https://drive.google.com/file/d/1Z6N8NdVO6vm0BNkRfPGr-GveHMTS9TLu",
  version: "6.16.18",
  isLogin: isLogin,
  initialRouteName: isLogin ? "topic" : "login",
};

const staging = {
  ...local,
  domain: "https://datai999.github.io/thesis/",
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

const localStaging = {
  ...local,
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

export default staging;
