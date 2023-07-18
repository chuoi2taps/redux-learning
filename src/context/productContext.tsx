import { createContext, useReducer, useState } from "react";
import axios from "axios"
import {produce} from 'immer'
export const ProductContext = createContext({} as any)

const initState = {
    products:[],
    isLoading: false,
    error: ""
}

const productReducer = (state:any, action:any)=>{
    switch(action.type){
        case "FETCH_PRODUCTS":
            state.products = action.payload
            return;
        case "ADD_PRODUCT":
            state.products.push(action.payload)
            return;
        case "EDIT_PRODUCT":
            const product = action.payload;
            state.products = state.products.map((item:any)=>item.id === product.id ? product : item)
            return;
        case "DELETE_PRODUCT":
            const id = action.payload.id;
            state.products = state.products.filter((item:any)=>item.id !== id)
        default:
            return state;
    }
}

const ProductProvider = ({children}:{children:React.ReactNode}) => {
    const [state, setState] = useReducer(produce(productReducer),initState)
    
    return (
        <ProductContext.Provider value={{state, setState}} >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider