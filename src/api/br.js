import CommonApi from "./CommonApi";

const constCommonApi = CommonApi("/const");
const settingCommonApi = CommonApi("/setting");

export const ConstApi = {
  ...constCommonApi,
  getTypes: () => constCommonApi.get("/types"),
};

export const SettingApi = {
  ...settingCommonApi,
  setTemplate: (topicAssign, isThesis) =>
    settingCommonApi.post("/template", topicAssign, {
      params: { thesis: isThesis },
    }),
  getTemplate: (isThesis) =>
    settingCommonApi.get("/template", { params: { thesis: isThesis } }),
};
