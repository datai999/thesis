import CommonApi from "../CommonApi";

const constCommonApi = CommonApi("/const");
const settingCommonApi = CommonApi("/setting");

export const ConstApi = {
  ...constCommonApi,
  getTypes: () => constCommonApi.get("/types"),
};

export const SettingApi = {
  ...settingCommonApi,
  settingTemplate: (topicAssign) =>
    settingCommonApi.post("/template", topicAssign),
};
