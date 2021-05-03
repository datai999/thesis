import AxiosClient from "./AxiosClient";

const ConstApi = {
  getAll: () => {
    const url = "/const";
    console.log("const" + AxiosClient.get(url));
    return AxiosClient.get(url);
  },
};

export default ConstApi;
