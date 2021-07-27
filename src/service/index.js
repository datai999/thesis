import createHolderService from "./createHolderService";
import navService from "./navService";
import propsService from "./propsService";

export { propsService, navService };

export const loadingService = {
  start: null,
  end: null,
};

export const assignPropsService = (fields, prePath = "") => {
  return fields.map((field) => {
    return {
      api: field.link,
      label: prePath + field.link + ".label",
      placeholder: prePath + field.link + ".placeholder",
      ...field,
    };
  });
};

export const dimensionService = createHolderService();

export const languageService = createHolderService();

const createToastService = () => {
  let holderService = createHolderService();

  const notify = (type, msg = "toast.default", originMsg) =>
    holderService.setNextState({
      ...originMsg,
      type: type,
      msg: msg,
    });
  const notifyError = (msg, originMsg) => notify("danger", msg, originMsg);

  return {
    ...holderService,
    notify: notify,
    info: (msg, originMsg) => notify("info", msg, originMsg),
    success: (msg, originMsg) => notify("success", msg, originMsg),
    warning: (msg, originMsg) => notify("warning", msg, originMsg),
    error: notifyError,
    errorCode: (code, error) => {
      switch (code) {
        case "auth/invalid-email":
          notifyError("toast.email.invalid", error);
          break;
        case "auth/wrong-password":
          notifyError("toast.password.invalid", error);
          break;
        case "auth/weak-password":
          notifyError("toast.password.weak", error);
          break;
        default:
          notifyError(error.message, error);
      }
    },
  };
};

export const toastService = createToastService();
