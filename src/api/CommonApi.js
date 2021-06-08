import AxiosClient from "./AxiosClient";

const CommonApi = (baseURL = "") => {
  return {
    getAll: () => {
      return AxiosClient.get(baseURL);
    },
    getPaging: (pageParam) => {
      return AxiosClient.get(baseURL + "/paging", { params: pageParam });
    },
    create: (data) => {
      return AxiosClient.post(baseURL, data);
    },
    get: (url, param) => {
      return AxiosClient.get(baseURL + url, { params: param });
    },
  };
};

export default CommonApi;
