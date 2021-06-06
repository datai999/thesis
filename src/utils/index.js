import link from "assets/link";
import Props from "data/Props";
import dateFormat from "dateformat";
import _ from "lodash";
import i18n from "utils/i18n";

function getRenderText(obj) {
  if (obj == null) return "";
  if (Array.isArray(obj)) return obj.map((x) => getRenderText(x));
  switch (typeof obj) {
    case "string":
    case "number":
      return obj;
    case "object": {
      if (obj[i18n.language] != null) return obj[i18n.language];
      if (typeof obj.name == "object") return obj.name[i18n.language];
      if (typeof obj.value == "object") return obj.value[i18n.language];
      if (obj.name != null) return obj.name;
      if (obj.value != null) return obj.value;
      return "";
    }
    default:
      return null;
  }
}

function dateToLocal(date) {
  return date.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
}

function toLocalDate(date) {
  return dateFormat(dateToLocal(date), "yyyy-mm-dd");
}

function toLocalTime(date) {
  return dateFormat(dateToLocal(date), "HH:MM");
}

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
      const linkResult = getLinkProps(path);
      const apiPath = linkResult.api ?? path;
      return {
        ...inputProps(path),
        ...Props[apiPath.split(".").pop()],
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

    if (linkProps == null || linkProps.api == null) {
      linkProps = {
        ...linkProps,
        api: path,
      };
    }

    if (linkProps.link != null) {
      let linkRefProps = _.get(link, linkProps.link);
      linkProps = {
        ...linkRefProps,
        ...linkProps,
        api:
          path.slice(path.indexOf(".") + 1, path.lastIndexOf(".") + 1) +
          linkRefProps.api,
      };
    }

    linkProps = {
      ...linkProps,
      label: linkProps.label
        ? i18n.t(linkProps.label)
        : i18n.t(linkProps.api + ".label"),
      placeholder: linkProps.placeholder
        ? i18n.t(linkProps.placeholder)
        : i18n.t(linkProps.api + ".placeholder"),
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

export { getRenderText, dateToLocal, toLocalDate, toLocalTime };

