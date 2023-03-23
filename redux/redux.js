const redux = require("redux");

//action (행동: 이런 조건을 가지면 행동)
const ADD_PRODUCT = "ADD_PRODUCT";

const addProduct = function(){
    return{type : "ADD_PRODUCT"}
}

const initState = {products:500};

const reducer = (state, action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return{ state, products : state.products+1};
        default:
            return state;
    }
}

const createStore = redux.createStore;

const store = creatStore(reducer);

store.dispatch(addProduct());
console.log(store.getState());