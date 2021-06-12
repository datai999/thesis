export let navHolder;

const service = {
  setNav: (navigation) => {
    navHolder = navigation;
  },
  get: () => navHolder,
};

export default service;
