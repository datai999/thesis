import dateFormat from "dateformat";
import env from "src/env";
import i18n from "./i18n";
import { createProps, emailTail, getHeadMail, getLinkProps } from "./link";

export { createProps, getLinkProps, i18n, env, emailTail, getHeadMail };

export function getRenderText(obj) {
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

export function dateToLocal(date) {
  return date.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
}

export function toLocalDate(date) {
  return dateFormat(dateToLocal(date), "yyyy-mm-dd");
}

export function toLocalTime(date) {
  return dateFormat(dateToLocal(date), "HH:MM");
}

export const currentSemester = () => {
  let currentYear = new Date().getFullYear().toString().substr(-2);
  let currentMonth = new Date().getMonth();
  if (currentMonth >= 8) return currentYear + "1";
  if (currentMonth < 4) return currentYear + "2";
  return currentYear + "3";
};
