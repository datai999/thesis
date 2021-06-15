import link from "assets/link";
import constData from "data/constData";
import _ from "lodash";
import i18n from "utils/i18n";

export const createProps = (form) => {
  const setValue = (path, value) => _.set(form, path, value);

  const inputProps = (path) => {
    const linkResult = getLinkProps(path);
    const apiPath = linkResult.api ?? path;
    return {
      value: _.get(form, apiPath),
      callBack: (value) => setValue(apiPath, value),
      ...linkResult,
    };
  };

  return {
    set: setValue,
    input: inputProps,
    inputLang: (path) => inputProps(path + "." + i18n.language),
    inputToggleLang: (path) =>
      inputProps(path + "." + (i18n.language == "en" ? "vi" : "en")),
    inputSearch: (path, api) => {
      return {
        ...inputProps(path),
        refreshDataOnChangeText: (value) => api.search(value),
      };
    },
    select: (path) => {
      const inputProp = inputProps(path);
      return {
        ...constData[inputProp.api.split(".").pop()],
        ...inputProp,
      };
    },
  };
};

export const getLinkProps = (paths) => {
  const getLinkProp = (path) => {
    let lastPath = path.split(".").pop();
    let lang = false;
    if (lastPath == "en" || lastPath == "vi") {
      lang = true;
      path = path.slice(0, path.lastIndexOf("."));
    }

    let linkProps = _.get(link, path);

    let apiValue = path;
    if (linkProps != null && linkProps.api == null)
      apiValue = path.split(".").pop();

    linkProps = {
      api: apiValue,
      ...linkProps,
      label: linkProps?.label
        ? i18n.t(linkProps?.label)
        : i18n.t(path + ".label"),
      placeholder: linkProps?.placeholder
        ? i18n.t(linkProps?.placeholder)
        : i18n.t(path + ".placeholder"),
    };

    if (lang) {
      let tail =
        lastPath == "en" ? i18n.t("origin.inEn") : i18n.t("origin.inVi");
      return {
        ...linkProps,
        label: linkProps.label ? linkProps.label + tail : null,
        placeholder: linkProps.placeholder
          ? linkProps.placeholder + tail
          : null,
        api: linkProps.api + "." + lastPath,
      };
    }
    return linkProps;
  };

  if (Array.isArray(paths)) return Array.from(paths, getLinkProp);
  return getLinkProp(paths);
};
