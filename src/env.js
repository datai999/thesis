import { Platform } from "react-native";

let isLogin = Platform.OS == "android" ? true : true;

const local = {
  domain: "http://localhost:19006/",
  baseURL: "http://192.168.15.112:8080/api",
  androidLinkDown:   "https://drive.google.com/file/d/1Z6N8NdVO6vm0BNkRfPGr-GveHMTS9TLu",
  version: "6.15.20",
  isLogin: isLogin,
  initialRouteName: isLogin ? "topic" : "home",
};

export default local;
