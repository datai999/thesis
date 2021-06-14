import AxiosClient from "./AxiosClient";

const CommonApi = (baseURL = "") => {
  return {
    get: (url, config) => {
      return AxiosClient.get(baseURL + url, config);
    },
    post: (url, data, config) => {
      return AxiosClient.post(baseURL + url, data, config);
    },
    getAll: () => {
      return AxiosClient.get(baseURL);
    },
    getPaging: (pageParam) => {
      return AxiosClient.get(baseURL + "/paging", { params: pageParam });
    },
    create: (data) => {
      return AxiosClient.post(baseURL, data);
    },
    postExample: (example) => {
      return AxiosClient.post(baseURL + "/example", example);
    },
  };
};

export default CommonApi;
