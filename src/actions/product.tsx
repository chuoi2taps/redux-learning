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
export const getOneProduct = createAsyncThunk(
    "product/getOneProduct",
    async (id:any) => {
        try{
            const {data} = await axios.get(`http://localhost:3000/products/${id}`)
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