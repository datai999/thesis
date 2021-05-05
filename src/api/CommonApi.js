import AxiosClient from "./AxiosClient";

const CommonApi = (baseURL = "") => {
  let commonApi = new Object();

  commonApi["getAll"] = () => {
    return AxiosClient.post(baseURL);
  };

  commonApi["create"] = (data) => {
    return AxiosClient.post(baseURL, data);
  };

  return commonApi;
};

export default CommonApi;
