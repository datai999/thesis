import CommonApi from "../CommonApi";

const baseURL = "/const";

const commonApi = CommonApi(baseURL);

const ConstApi = {
  ...commonApi,
  getTypes: () => commonApi.get("/types"),
};

export default ConstApi;
