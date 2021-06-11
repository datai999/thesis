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
    settingCommonApi.post("/template", topicAssign, {
      params: { thesis: false },
    }),
  settingThesisTemplate: (topicAssign) =>
    settingCommonApi.post("/template", topicAssign, {
      params: { thesis: true },
    }),
};
