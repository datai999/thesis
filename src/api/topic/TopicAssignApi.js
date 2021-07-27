import CommonApi from "../CommonApi";

const baseURL = "/topic/assign";

const commonApi = CommonApi(baseURL);

const TopicAssignApi = {
  ...commonApi,
  searchByTeacherCode: (code) =>
    commonApi.get("/search/teacher", { params: { code: code } }),
  searchByTopic: (value) =>
    commonApi.get("/search/topic", { params: { value: value } }),
  findByTopicId: (topicId) => commonApi.get("/search/topic/" + topicId),
};

export default TopicAssignApi;
