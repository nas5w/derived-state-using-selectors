const createSelector = require("./createSelector");

const state = {
  name: "Judy",
  age: 22,
  employee: false,
  isFriendly: true
};

const allowedIn = state => state.age >= 21 || state.employee;
const isFriendly = state => state.isFriendly;
const highFiveThem = createSelector(
  allowedIn,
  isFriendly,
  (allowedIn, isFriendly) => allowedIn && isFriendly
);

console.log(highFiveThem(state));
// true
