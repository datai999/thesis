function notifyListener(arr, value) {
  arr.forEach((listener) => listener(value));
}

export const langHolder = {
  listeners: [],
  notify: (lang) => notifyListener(langHolder.listeners, lang),
};

export const toastHolder = {
  listeners: [],
  notify: (type, message = "toast.default", another) =>
    notifyListener(toastHolder.listeners, {
      ...another,
      type: type,
      message: message,
    }),
  info: (message, over) => toastHolder.notify("info", message, over),
  success: (message, over) => toastHolder.notify("success", message, over),
  waring: (message, over) => toastHolder.notify("waring", message, over),
  error: (message, over) => toastHolder.notify("danger", message, over),
};
