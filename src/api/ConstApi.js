import AxiosClient from "./AxiosClient";

const baseURL = "/const";

const ConstApi = {
  getAll: () => {
    const url = baseURL;
    return AxiosClient.get(url);
  },

  getTypes: () => {
    const url = baseURL + "/types";
    return AxiosClient.get(url);
  },
};

export default ConstApi;
