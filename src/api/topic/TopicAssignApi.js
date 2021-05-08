import CommonApi from "../CommonApi";

const baseURL = "/topic/assign";

const TopicAssignApi = {
  ...CommonApi(baseURL),
};

export default TopicAssignApi;
