import { createStore } from 'redux';
const redux = require('redux');

const counterReduser = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'dencrement') {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = redux.createStore(counterReduser);
export default store;
