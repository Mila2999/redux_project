import { cteateStore } from 'redux';

const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'encrement') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'dencrement') {
    return { counter: state.counter - 1 };
  }
  return state;
};
const store = redux.createStore(counterReducer);
export default store;
