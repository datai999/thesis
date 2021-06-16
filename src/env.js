import { Platform } from "react-native";

let isLogin = Platform.OS == "android" ? true : false;

const local = {
  baseURL: "http://192.168.15.112:8080/api",
  androidLinkDown:
    "https://drive.google.com/file/d/1Z6N8NdVO6vm0BNkRfPGr-GveHMTS9TLu",
  version: "6.17.00",
  isLogin: isLogin,
  initialRouteName: isLogin ? "topic" : "login",
};

const staging = {
  ...local,
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

const localStaging = {
  ...local,
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

export default staging;
