import CommonApi from "../CommonApi";

const baseURL = "/topic/assign";

const commonApi = CommonApi(baseURL);

const TopicAssignApi = {
  ...commonApi,
  searchByTeacherCode: (code) =>
    commonApi.get("/search/teacher", { params: { code: code } }),
};

export default TopicAssignApi;
