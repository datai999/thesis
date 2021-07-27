import firebase, { provider } from "api/firebase";
import TeacherApi from "api/person/TeacherApi";
import { removeWhenLogout, setWhenLogin } from "data/localStorage";
import i18n from "utils/i18n";
import { navService, toastService } from "./index";

const emailTail = "@hcmut.edu.vn";

let loginListeners = [];

export const demoLogin = async () => {
  await setWhenLogin("tai.nguyen.cse.datai", 123);
  notifyLogin();
  await navService.navigate("topic");
  toastService.success("toast.login.success");
};

function navToHome(email) {
  if (email.substring(email.indexOf("@")) != emailTail) {
    toastService.error(email + i18n.t("toast.email.notHcmut"), { email });
    return;
  }

  TeacherApi.postExample({ email: email }).then(async (response) => {
    await setWhenLogin(email, response[0]?.code);
    notifyLogin();
    await navService.navigate("topic");
    toastService.success("toast.login.success");
  });
}

function notifyLogin() {
  loginListeners.forEach((listener) => listener(true));
}

function signInWithPopup() {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      navToHome(result.user.email);
    })
    .catch((error) => {
      toastService.errorCode(error.code, error);
    });
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(async () => {
      await removeWhenLogout();
      await loginListeners.forEach((listener) => listener(false));
      await navService.navigate("login");
      toastService.info("toast.logout.success");
    })
    .catch((error) => {
      toastService.errorCode(error.code, error);
    });
}

export default {
  loginListeners: loginListeners,
  signInWithPopup: signInWithPopup,
  logout: logout,
};
