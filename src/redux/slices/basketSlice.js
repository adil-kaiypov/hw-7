import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, action) =>{
            if(!state.items.includes(action.payload)){
                state.items.push(action.payload);
            }
        }
    }
});

export const {addItem} = basketSlice.actions;
export default basketSlice.reducer;
export const basketSelect = state => state.basketSlice;
export const basketItemCount = state => state.basketSlice.items.length;
