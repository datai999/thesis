const isLogin = true;

const local = {
  domain: "http://localhost:19006/",
  baseURL: "http://192.168.15.112:8080/api",
  version: "6.15.16",
  isLogin: isLogin,
  initialRouteName: isLogin ? "topic" : "home",
};

export default local;
