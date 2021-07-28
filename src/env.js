const local = {
  baseURL: "http://192.168.3.101:8080/api",
  androidLinkDown:
    "https://drive.google.com/drive/u/2/folders/1md5IcZk79ePRip2V8pP0l4FEMOdEQCJI",
  version: "7.28.09.a",
  // skipLogin: {
  //   email: "tai.nguyen.cse.datai",
  //   code: "123",
  //   screen: "login",
  //   // subScreen: { screen: "topicCreate" },
  // },
};

const staging = {
  ...local,
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

export default staging;
