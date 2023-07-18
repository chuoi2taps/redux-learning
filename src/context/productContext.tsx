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
    // const [products, setProducts] = useState([] as any)
    const [state, setState] = useReducer(produce(productReducer),initState)
    // const addProduct = async (product: any) => {
    //     try {
    //         // call api
    //         const { data } = await axios.post(`http://localhost:3000/products/`,product);
    //         // rerender
    //         setProducts([...products, data]);
    //     } catch (error: any) {
    //         console.log(error.message);
    //     }
    // };
    // const editProduct = async (product: any) => {
    //     try{
    //         const {data} = await axios.put(`http://localhost:3000/products/${product.id}`,product);
    //         setProducts(products.map((item:any)=>item.id === data.id ?data:item));
    //     }
    //     catch (error: any) {
    //         console.log(error.message);
    //     }
    // }
    // const deleteProduct = async (product: any) => {
    //     try {
    //         // call api
    //         await axios.delete(`http://localhost:3000/products/${product.id}`);
    //         // rerender
    //         setProducts(products.filter((item: any) => item.id !== product.id));
    //     } catch (error: any) {
    //         console.log(error.message);
    //     }
    // };
    // const fetchProduct = async () => {
    //     try {
    //         const { data } = await axios.get(`http://localhost:3000/products`);
    //         setProducts(data);
    //     } catch (error) {}
    // };
    return (
        <ProductContext.Provider value={{state, setState}} >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider