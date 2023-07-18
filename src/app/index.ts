import {legacy_createStore as createStore, combineReducers} from 'redux'
import {produce} from 'immer'
const counterReducer = (state={count:0}, action:any)=>{
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1}
        case "DECREMENT":
            return {count: state.count - 1}
        case "INCREASE":
            return {count: state.count + action.payload}
        default:
            return state
    }
}
const productReducer = (state={products:[]}, action:any)=>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            state.products = action.payload
            return;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
})

const store = createStore(rootReducer)

export default store