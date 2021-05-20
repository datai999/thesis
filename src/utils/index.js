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
      return "";
    }
    default:
      return null;
  }
}

export { getRenderText };
