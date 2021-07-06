const local = {
  baseURL: "http://192.168.15.106:8080/api",
  androidLinkDown:
    "https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40datai28599/thesis-1b99d70512c44b3cb77ea5d649c4b2d9-signed.apk",
  version: "7.06.01",
  isLogin: false,
  initialRouteName: "login",
};

const staging = {
  ...local,
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

export default local;
