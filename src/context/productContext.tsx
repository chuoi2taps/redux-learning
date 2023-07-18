import { createContext, useReducer } from "react"
import {produce} from 'immer'
export const ProductContext = createContext({} as any)
const initState={
    products:[],
    isLoading: false,
    error: ""
}
const productReducer = (state:any, action:any)=>{
    switch(action.type){
        case "FETCHING":
            state.products = action.payload
            return;
        case "ADD":
            state.products.push(action.payload)
    }
}
const ProductProvider = ({children}:any) => {
    const [state, dispatch] = useReducer(produce(productReducer), initState)
    return (
    <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider