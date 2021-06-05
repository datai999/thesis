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
  const setValue = (path, value) => (form[path] = value);
  return {
    set: setValue,
    input: (path) => {
      const linkResult = _.get(link, path);
      return {
        value: form[linkResult?.api],
        callBack: (value) => setValue(linkResult?.api, value),
        ...linkResult,
      };
    },
    select: (path) => {
      const linkResult = _.get(link, path);
      return {
        value: form[linkResult.api],
        callBack: (value) => setValue(linkResult.api, value),
        ...linkResult,
        ...Props[linkResult.api],
      };
    },
  };
};

export const getLinkProps = (arrPath) => {
  return Array.from(arrPath, (path) => {
    let linkProps = _.get(link, path);
    if (linkProps.ref != null) {
      let linkRefProps = _.get(link, linkProps.ref);
      return {
        ...linkRefProps,
        ...linkProps,
        api:
          path.slice(path.indexOf(".") + 1, path.lastIndexOf(".") + 1) +
          linkRefProps.api,
      };
    }
    return linkProps;
  });
};

export { getRenderText, dateToLocal, toLocalDate, toLocalTime };

