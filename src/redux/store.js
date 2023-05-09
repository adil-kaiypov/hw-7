import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice'
import basketSlice from './slices/basketSlice';

export const store = configureStore({
    reducer:{
        productsSlice,
        basketSlice
    },
});