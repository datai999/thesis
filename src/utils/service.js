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

export const languageService = createHolderService();

const createToastService = () => {
  let holderService = createHolderService();

  return {
    ...holderService,
    notify: (type, msg = "toast.default", another) =>
      holderService.notify({
        ...another,
        type: type,
        msg: msg,
      }),
    info: (msg, another) => toastService.notify("info", msg, another),
    success: (msg, another) => toastService.notify("success", msg, another),
    warning: (msg, another) => toastService.notify("warning", msg, another),
    error: (msg, another) => toastService.notify("danger", msg, another),
    errorCode: (code, error) => {
      switch (code) {
        case "auth/invalid-email":
          toastService.error("toast.email.invalid", error);
          break;
        case "auth/wrong-password":
          toastService.error("toast.password.invalid", error);
          break;
        case "auth/weak-password":
          toastService.error("toast.password.weak", error);
          break;
        default:
          toastService.error(error.message, error);
      }
    },
  };
};

export const toastService = createToastService();

export let navService = {
  nav: null,
  serPersonMode: null,
  navigate: (screen) => {
    navService.nav.navigate(screen);
    AsyncStorage.setItem("screen", screen);
  },
};
