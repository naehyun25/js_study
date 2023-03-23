const redux = require("redux");

const reduxLogger = require("redux-logger");

const logger= reduxLogger.createLogger();

const applyMiddleware = redux.applyMiddleware;

const ADD_PRODUCT = "ADD_PRODUCT";
const addProduct = () => {
  return { type: ADD_PRODUCT };
};
const initState = { products: 500 };
const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { state, products: state.products + 1 };
    default:
      return state;
  }
};

const createStore = redux.createStore;
const store = createStore(reducer, applyMiddleware(logger));
store.dispatch(addProduct());
console.log(store.getState());