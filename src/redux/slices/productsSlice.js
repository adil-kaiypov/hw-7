import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { link } from "../link";

const initialState = {
    products: [],
    load: true
};

export const getProducts = createAsyncThunk('products',
    async () => {
        const {data} = await axios.get(link.URL)
        return data;
});

const productsSlice = createSlice({
    name:'productsSlice',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.load = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.load = false
                state.products = action.payload.data
            })
            .addCase(getProducts.rejected, (action) => {
                alert(action.payload)
            })
    }
})

export default productsSlice.reducer;
export const productsSelect = state => state.productsSlice;