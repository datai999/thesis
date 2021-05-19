function getRenderText(obj) {
  if (obj == null) return null;
  if (Array.isArray(obj)) return obj.map((x) => getRenderText(x));
  switch (typeof obj) {
    case "string":
    case "number":
      return obj;
    case "object":
      return obj?.name ?? obj?.value;
    default:
      return null;
  }
}

export { getRenderText };
