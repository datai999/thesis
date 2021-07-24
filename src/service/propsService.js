import constData from "data/constData";
import _ from "lodash";
import { i18n } from "utils";

export default {
  createPropsStore: (form) => {
    const inputProps = (path) => {
      return {
        label: path + ".label",
        placeholder: path + ".placeholder",
        value: _.get(form, path),
        callBack: (value) => _.set(form, path, value),
      };
    };

    const inputLang = (path, lang = i18n.language) => {
      const langText =
        lang == "en" ? i18n.t("origin.inEn") : i18n.t("origin.inVi");
      const cloneInputProps = inputProps(path + "." + lang);
      return {
        ...cloneInputProps,
        label: i18n.t(path + ".label") + langText,
        placeholder: i18n.t(path + ".placeholder") + langText,
      };
    };

    return {
      form,
      input: inputProps,
      inputLang,
      inputToggleLang: (path) =>
        inputLang(path, i18n.language == "en" ? "vi" : "en"),
      inputSearch: (path, api) => {
        return {
          ...inputProps(path),
          refreshDataOnChangeText: (value) => api.search(value),
        };
      },
      select: (path) => {
        return {
          ...constData[path.split(".").pop()],
          ...inputProps(path),
        };
      },
    };
  },
};
