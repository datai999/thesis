import CommonApi from "./CommonApi";

const constCommonApi = CommonApi("/const");
const settingCommonApi = CommonApi("/setting");

export const ConstApi = {
  ...constCommonApi,
  getTypes: () => constCommonApi.get("/types"),
};

export const SettingApi = {
  ...settingCommonApi,
  settingTopicTemplate: (topicAssign) =>
    settingCommonApi.post("/topic-template", topicAssign),
  settingThesisTemplate: (topicAssign) =>
    settingCommonApi.post("/thesis-template", topicAssign),
};
