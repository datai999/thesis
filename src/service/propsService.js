import constData from "data/constData";
import _ from "lodash";
import { i18n } from "utils";

export default {
  createPropsStore: (form) => {
    const inputProps = (path, props) => {
      return {
        label: path + ".label",
        placeholder: path + ".placeholder",
        value: _.get(form, path),
        callBack: (value) => _.set(form, path, value),
        ...props,
      };
    };

    const inputLang = (path) => {
      const langText =
        i18n.language == "en" ? i18n.t("origin.inEn") : i18n.t("origin.inVi");
      const cloneInputProps = inputProps(path + "." + i18n.language);
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
      inputSearch: (path, api) => {
        return {
          ...inputProps(path),
          refreshDataOnChangeText: (value) => api.search(value),
        };
      },
      select: (path, props) => {
        return {
          ...constData[path.split(".").pop()],
          ...inputProps(path, props),
        };
      },
    };
  },
};
