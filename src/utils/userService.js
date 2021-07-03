import firebase, { provider } from "api/firebase";
import TeacherApi from "api/person/TeacherApi";
import { removeWhenLogout, setWhenLogin } from "data/localStorage";
import i18n from "./i18n";
import { navService, toastHolder } from "./service";

const emailTail = "@hcmut.edu.vn";

let loginListeners = [];

function navToHome(email) {
  if (email.substring(email.indexOf("@")) != emailTail) {
    toastHolder.error(email + i18n.t("toast.email.notHcmut"), { email });
    return;
  }

  TeacherApi.postExample({ email: email }).then((response) => {
    setWhenLogin(email, response[0]?.code);
    notifyLogin();
    navService.navigate("topic");
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
      toastHolder.errorCode(error.code, error);
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
      toastHolder.info("toast.login.success");
    })
    .catch((error) => {
      toastHolder.errorCode(error.code, error);
    });
}

export default {
  loginListeners: loginListeners,
  signInWithPopup: signInWithPopup,
  logout: logout,
};
