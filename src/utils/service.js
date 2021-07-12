import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadingService = {
  start: null,
  end: null,
};

function notifyListener(arr, value) {
  arr.forEach((listener) => listener(value));
}

const createHolderService = () => {
  let listeners = [];
  let stateStack = [];

  return {
    listeners: listeners,
    stateStack: stateStack,
    getState: () => stateStack[stateStack.length - 1],
    notify: (nextState) => {
      stateStack.push(nextState);
      listeners.forEach((action) => action(nextState));
    },
    subscribe: (action) => listeners.push(action),
  };
};

export const dimensionService = createHolderService();

export const languageService = {
  listeners: [],
  notify: (language) => notifyListener(languageService.listeners, language),
  listen: (action) => languageService.listeners.push(action),
};

export const langHolder = languageService;

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
  warning: (msg, another) => toastHolder.notify("warning", msg, another),
  error: (msg, another) => toastHolder.notify("danger", msg, another),
  errorCode: (code, error) => {
    switch (code) {
      case "auth/invalid-email":
        toastHolder.error("toast.email.invalid", error);
        break;
      case "auth/wrong-password":
        toastHolder.error("toast.password.invalid", error);
        break;
      case "auth/weak-password":
        toastHolder.error("toast.password.weak", error);
        break;
      default:
        toastHolder.error(error.message, error);
    }
  },
};

export let navService = {
  nav: null,
  serPersonMode: null,
  navigate: (screen) => {
    navService.nav.navigate(screen);
    AsyncStorage.setItem("screen", screen);
  },
};
