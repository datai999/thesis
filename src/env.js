const local = {
  baseURL: "http://192.168.3.101:8080/api",
  androidLinkDown:
    "https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40datai28599/thesis-ef476fae41fc4b70a5b735ca0109afec-signed.apk",
  version: "7.14.01",
  skipLogin: {
    email: "tai.nguyen.cse.datai",
    code: "123",
    screen: "topic",
    // subScreen: { screen: "topicCreate" },
  },
};

const staging = {
  ...local,
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

export default local;
