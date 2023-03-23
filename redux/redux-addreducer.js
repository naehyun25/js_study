const redux = require("redux");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const ADD_PRODUCT = "ADD_PRODUCT";
const addProduct = () => {
  return { type: "ADD_PRODUCT" };
};
const initState = { products: 500 };
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { state, products: state.products + 1 };
    default:
      return state;
  }
};

const combineReducers = redux.combineReducers;
const ADD_CARTCOUNT = "ADD_CARTCOUNT";
const addCartCount = () => {
  return { type: ADD_CARTCOUNT }; 
};
const cartState = { cartCount: 0 };
const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_CARTCOUNT:
      return { state, cartCount: state.cartCount + 1 };
    default:
      return state;
  }
};

const combineReducer = combineReducers({   
    product : productReducer,
    cart : cartReducer
});

const createStore = redux.createStore;
const store = createStore(combineReducer, applyMiddleware(logger));

store.dispatch(addCartCount()); //연결된거 다 써줘야함
store.dispatch(addProduct());