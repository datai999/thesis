function notifyListener(arr, value) {
  arr.forEach((listener) => listener(value));
}

export const langHolder = {
  listeners: [],
  notify: (lang) => notifyListener(langHolder.listeners, lang),
};

export const toastHolder = {
  listeners: [],
  notify: (type, msg = "toast.default", another) =>
    notifyListener(toastHolder.listeners, {
      ...another,
      type: type,
      msg: msg,
    }),
  info: (msg, another) => toastHolder.notify("info", msg, another),
  success: (msg, another) => toastHolder.notify("success", msg, another),
  waring: (msg, another) => toastHolder.notify("waring", msg, another),
  error: (msg, another) => toastHolder.notify("danger", msg, another),
};
