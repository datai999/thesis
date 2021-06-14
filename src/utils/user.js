let loginListeners = [];

let userStorage = {
  isLogin: false,
  code: 1,
};

function login() {
  userStorage.isLogin = true;
  loginListeners.forEach((listener) => listener(true));
}

export let user = {
  ...userStorage,
  loginListeners: loginListeners,
  login: login,
};
