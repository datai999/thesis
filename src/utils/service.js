import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadingService = {
  start: null,
  end: null,
};

export let navService = {
  nav: null,
  serPersonMode: null,
  navigate: (screen) => {
    navService.nav.navigate(screen);
    AsyncStorage.setItem("screen", screen);
  },
};

const createHolderService = () => {
  let listeners = [];
  let stateStack = [];

  return {
    listeners: listeners,
    stateStack: stateStack,
    getCurrentState: () => stateStack[stateStack.length - 1],
    setNextState: (nextState) => {
      stateStack.push(nextState);
      listeners.forEach((action) => action(nextState));
    },
    onNextState: (action) => listeners.push(action),
  };
};

export const dimensionService = createHolderService();

export const languageService = createHolderService();

const createToastService = () => {
  let holderService = createHolderService();

  return {
    ...holderService,
    notify: (type, msg = "toast.default", another) =>
      holderService.setNextState({
        ...another,
        type: type,
        msg: msg,
      }),
    info: (msg, another) => toastService.setNextState("info", msg, another),
    success: (msg, another) =>
      toastService.setNextState("success", msg, another),
    warning: (msg, another) =>
      toastService.setNextState("warning", msg, another),
    error: (msg, another) => toastService.setNextState("danger", msg, another),
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
