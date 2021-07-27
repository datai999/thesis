import createHolderService from "./createHolderService";

const navService = {
  ...createHolderService(),
  nav: null,
  navigate: (screen, subScreen) => {
    navService.setNextState({ screen, subScreen });
  },
};

export default navService;
