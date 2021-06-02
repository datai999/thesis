import i18n from "utils/i18n";

function getRenderText(obj) {
  if (obj == null) return null;
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

function dateToLocalTime(date){
  return date.toLocaleString("en-US", {timeZone: "Asia/Ho_Chi_Minh"});
}

function getLocalTime(){
  return dateToLocalTime(new Date());
}

export { getRenderText, dateToLocalTime, getLocalTime };

