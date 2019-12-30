const createSelector = (...funcs) => {
  const last = funcs.pop();
  return state => {
    const inputs = funcs.map(func => func(state));
    return last(...inputs);
  };
};

module.exports = createSelector;
