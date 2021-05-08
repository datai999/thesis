function getRenderText(obj) {
  if (obj == null) return null;
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
