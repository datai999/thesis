const local = {
  baseURL: "http://192.168.15.112:8080/api",
  androidLinkDown:
    "https://drive.google.com/file/d/1Z6N8NdVO6vm0BNkRfPGr-GveHMTS9TLu",
  version: "6.17.00",
  isLogin: false,
  initialRouteName: "login",
};

const staging = {
  ...local,
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

export default staging;
