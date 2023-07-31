import { pause } from "../utils/pause";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        try{
            await pause(2000);
            const {data} = await axios.get(`http://localhost:3000/products`)
            return data;
        }
        catch(error:any){
            return error.message
        }
    }
)
export const addProduct = createAsyncThunk(
    "product/addProduct",
    async (product:any) => {
        try{
            await pause(1000);
            const {data} = await axios.post(`http://localhost:3000/products`, product)
            return data;
        }
        catch(error:any){
            return error.message;
        }
    }
)
export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (id:any) => {
        try{
            await axios.delete(`http://localhost:3000/products/${id}`)
            return id;
        }
        catch(error:any){
            return error.message;
        }
    }
)
export const updateProduct = createAsyncThunk(
    "product/updateProduct",
    async (product:any) => {
        try{
            const {data} = await axios.put(`http://localhost:3000/products/${product.id}`,product)
            return data;
        }
        catch(error:any){
            return error.message;
        }
    }
)
// export const addProduct = (product: any) => async (dispatch: any) => {
//     const {data} = await axios.post(`http://localhost:3000/products`, product)
//     dispatch({ type: "products/addProduct", payload: data })
// }
// export const deleteProduct = (id: any) => async (dispatch: any) => {
//     await axios.delete(`http://localhost:3000/products/${id}`)
//     dispatch({ type: "products/deleteProduct", payload: id })
// }
// export const updateProduct = (product: any) => async (dispatch: any) => {
//     const {data} = await axios.put(`http://localhost:3000/products/${product.id}`,product)
//     dispatch({ type: "products/updateProduct", payload: data })
//}