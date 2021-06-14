import firebase from "api/firebase";
import TeacherApi from "api/person/TeacherApi";
import { navHolder } from "utils/nav";

let loginListeners = [];

let userStorage = {
  validEmail: false,
  isLogin: false,
  code: 1,
};

const actionCodeSettings = {
  url: "http://localhost:19006/",
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
    if (user.code) {
      notifyLogin();
      navHolder.navigate("topic");
    } else {
      // TODO throw login error
      alert("Invalid email");
    }
  });
}

function loginWithEmailLink(email) {
  if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    firebase
      .auth()
      .signInWithEmailLink(email, window.location.href)
      .then((result) => {
        window.localStorage.removeItem("emailForSignIn");
        navToHome(email);
      })
      .catch((error) => {
        // TODO throw login error
        alert("signInWithEmailLink error" + error);
      });
  } else {
    window.localStorage.removeItem("emailForSignIn");
  }
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
      userStorage.isLogin = false;
      loginListeners.forEach((listener) => listener(false));
      navHolder.navigate("home");
    })
    .catch((error) => {
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
