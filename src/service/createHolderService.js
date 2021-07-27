export default () => {
  let listeners = [];
  let stateStack = [];

  return {
    listeners: listeners,
    stateStack: stateStack,
    getCurrentState: () => stateStack[stateStack.length - 1],
    setNextState: (nextState) => {
      stateStack.push(nextState);
      listeners.forEach((action) => action(nextState));
    },
    onNextState: (action) => listeners.push(action),
  };
};
