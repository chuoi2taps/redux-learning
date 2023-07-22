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
            break;
        case "ADD":
            state.products.push(action.payload)
            break;
        case "DELETE":
            const id = action.payload
            state.products = state.products.filter((item:any)=>item.id !== id)
            break;
        case "UPDATE":
            const product = action.payload
            state.products = state.products.map((item:any)=>item.id === product.id ? product: item)
            break;
        default:
            return state;
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