const local = {
  baseURL: "http://localhost:8080/api",
  androidLinkDown:
    "https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40datai28599/thesis-1b99d70512c44b3cb77ea5d649c4b2d9-signed.apk",
  version: "7.06.01",
  skipLogin: { email: "tai.nguyen.cse.datai", code: "123" },
};

const staging = {
  ...local,
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

export default local;
