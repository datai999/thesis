import AxiosClient from "./AxiosClient";

const ConstApi = {
  getAll: () => {
    const url = "/const";
    return AxiosClient.get(url);
  },
};

export default ConstApi;
