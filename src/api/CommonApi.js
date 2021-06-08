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
  };
};

export default CommonApi;
