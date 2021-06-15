function notifyListener(arr, value) {
  arr.forEach((listener) => listener(value));
}

export const langHolder = {
  listeners: [],
  notify: (lang) => notifyListener(langHolder.listeners, lang),
};
