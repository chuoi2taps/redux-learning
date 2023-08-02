
import { createSlice } from '@reduxjs/toolkit';
import { addProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from '../actions/product';

const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as {
    products: any[],
    isLoading: boolean,
    error: string | null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetching
        builder.addCase(getProducts.pending, (state: any) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state: any, action) => {
            state.isLoading = false
            state.products = action.payload;
        })
        builder.addCase(getProducts.rejected, (state: any, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        builder.addCase(getOneProduct.fulfilled, (state: any, action) => {
            state.isLoading = false
            const id = action.payload
            state.products = state.products.map((item: any) => item.id === id)
        })
        //Adding
        builder.addCase(addProduct.pending, (state: any) => {
            state.isLoading = true
        })
        builder.addCase(addProduct.fulfilled, (state: any, action) => {
            state.isLoading = false
            state.products.push(action.payload);
        })
        builder.addCase(addProduct.rejected, (state: any, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        //Updating
        builder.addCase(updateProduct.fulfilled, (state: any, action) => {
            const product = action.payload
            state.products = state.products.map((item: any) => item.id === product.id ? product : item)
        })
        builder.addCase(updateProduct.rejected, (state: any, action) => {
            state.isLoading = false
            state.error = action.payload    
        })
        //Deleting
        builder.addCase(deleteProduct.fulfilled, (state: any, action) => {
            const id = action.payload
            state.products = state.products.filter((item: any) => item.id !== id)
        })
        builder.addCase(deleteProduct.rejected, (state: any, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
});

export const productReducer = productSlice.reducer;