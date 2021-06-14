export let navHolder;

const service = {
  setNav: (navigation) => {
    navHolder = navigation;
  },
  get: () => navHolder,
  setPersonMode: null,
};

export default service;
