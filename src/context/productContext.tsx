import React, {createContext, useReducer} from 'react'
import {produce} from 'immer'

const initialState= {
    products: [],
    isLoading: false,
    error: ""
} as {products: any[], isLoading: boolean, error: string}
const productReducer = (state: any, action: any) => {
    switch(action.type) {
        case "FETCHING":
            state.products = action.payload
            break;
        case "ADD":
            state.products.push(action.payload)
            break;
        case "UPDATE":
            const product = action.payload
            state.products = state.products.map((item:any)=>item.id === product.id ? product : item)
            break;
        case "DELETE":
            const id = action.payload
            const confirm = window.confirm("Are you sure to delete this ?")
            if(confirm) {
                state.products = state.products.filter((item:any)=>item.id !== id)
            }
            break;
    }
}
export const ProductContext = createContext({} as any)
const ProductProvider = ({children}:any) => {
    const [state, dispatch] = useReducer(produce(productReducer), initialState)
    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider