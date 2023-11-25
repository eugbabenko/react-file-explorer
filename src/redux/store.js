import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fetchReducer from './fetchItemsSlice';
import pathSlice from './pathSlice';

const reducer = combineReducers({
    fetchReducer,
    pathSlice,
});

export const store = configureStore({
    reducer,
});
