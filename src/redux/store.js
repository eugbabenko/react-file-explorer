import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fetchReducer from './fetchItemsSlice';

const reducer = combineReducers({
    fetchReducer,
});

export const store = configureStore({
    reducer,
});
