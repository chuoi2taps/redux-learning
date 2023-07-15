import { createContext, useReducer } from "react";

export const CounterContext = createContext({} as any)

const initState = {
    count :0
}

const counterReducer = (state:any, action:any)=>{
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

const CounterProvider = ({children}:any)=>{
    const [state,setState] = useReducer(counterReducer, initState)
    return (
        <CounterContext.Provider value={{state,setState}}>{children}</CounterContext.Provider>
    )
}

export default CounterProvider