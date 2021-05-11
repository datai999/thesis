import AxiosClient from "./AxiosClient";

const CommonApi = (baseURL = "") => {
  let commonApi = new Object();

  commonApi["getAll"] = () => {
    return AxiosClient.get(baseURL);
  };

  commonApi["getPaging"] = (pageParam) => {
    return AxiosClient.get(baseURL + "/paging", { params: pageParam });
  };

  commonApi["create"] = (data) => {
    return AxiosClient.post(baseURL, data);
  };

  return commonApi;
};

export default CommonApi;
