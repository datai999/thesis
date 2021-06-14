const local = {
  domain: "http://localhost:19006/",
  baseURL: "http://192.168.15.112:8080/api",
  version: "6.15.02",
};

const staging = {
  ...local,
  domain: "https://datai999.github.io/thesis/",
  baseURL: "https://datai-thesis.herokuapp.com/api",
};

export default staging;
