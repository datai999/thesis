import firebase from "api/firebase";
import TeacherApi from "api/person/TeacherApi";
import env from "src/env";
import NavHolder from "utils/nav";

let loginListeners = [];

let userStorage = {
  validEmail: false,
  isLogin: env.isLogin,
  code: false,
};

const actionCodeSettings = {
  url: env.domain,
  handleCodeInApp: true,
};

function sendLoginEmail(email) {
  return firebase
    .auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(() => {
      window.localStorage.setItem("emailForSignIn", email);
    });
}

function navToHome(email) {
  TeacherApi.postExample({ email: email }).then((response) => {
    userStorage.code = response[0]?.code;
    notifyLogin();
    if (!user.code) {
      NavHolder.setPersonMode("teacher");
      NavHolder.get().navigate("person");
    } else {
      NavHolder.get().navigate("topic");
    }
  });
}

function loginWithEmailLink(email) {
  firebase
    .auth()
    .signInWithEmailLink(email, window.location.href)
    .then((result) => {
      console.log("sign in result");
      console.log(result);
      window.localStorage.removeItem("emailForSignIn");
      navToHome(email);
    })
    .catch((error) => {
      // TODO throw login error
      console.log("signInWithEmailLink error");
      console.log(error);
      alert("signInWithEmailLink error" + error);
    });
}

function notifyLogin() {
  userStorage.isLogin = true;
  loginListeners.forEach((listener) => listener(true));
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("sign out success");
      userStorage.isLogin = false;
      loginListeners.forEach((listener) => listener(false));
      NavHolder.get().navigate("home");
    })
    .catch((error) => {
      console.log("sign out error");
      console.log(error);
      alert("sign out error" + error);
    });
}

export let user = {
  ...userStorage,
  loginListeners: loginListeners,
  sendLoginEmail: sendLoginEmail,
  loginWithEmailLink: loginWithEmailLink,
  logout: logout,
};
