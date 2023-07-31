import {createSlice} from '@reduxjs/toolkit';

const initialState = {count:0} as {count:number};
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment: (state:any) => {
            state.count++;
        },
        decrement: (state:any) => {
            state.count--;
        },
        increase: (state:any, action:any) => {
            state.count += action.payload;
        },
        decrease: (state:any, action:any) => {
            state.count -= action.payload;
        }

    }
})
export const {increment, decrement, increase, decrease} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;