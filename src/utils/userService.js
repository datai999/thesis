import firebase, { provider } from "api/firebase";
import TeacherApi from "api/person/TeacherApi";
import { removeWhenLogout, setWhenLogin } from "data/localStorage";
import i18n from "./i18n";
import { navService, toastService } from "./service";

const emailTail = "@hcmut.edu.vn";

let loginListeners = [];

function navToHome(email) {
  if (email.substring(email.indexOf("@")) != emailTail) {
    toastService.error(email + i18n.t("toast.email.notHcmut"), { email });
    return;
  }

  TeacherApi.postExample({ email: email }).then((response) => {
    setWhenLogin(email, response[0]?.code);
    notifyLogin();
    navService.navigate("topic");
    toastService.info("toast.login.success");
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
    .then(() => {
      removeWhenLogout();
      loginListeners.forEach((listener) => listener(false));
      navService.navigate("login");
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
