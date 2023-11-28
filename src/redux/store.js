import { combineReducers, configureStore } from '@reduxjs/toolkit';

import fetchReducer from './slice/fetchItemsSlice';
import updateFilesSlice from './slice/updateItemsSlice';
import dropboxSlice from './slice/dropboxSlice';
import pathSlice from './slice/pathSlice';

// Combine multiple reducers into a single root reducer
const reducer = combineReducers({
    fetchReducer,
    pathSlice,
    dropboxSlice,
    updateFilesSlice,
});

// Create and configure the Redux store with the combined reducer
export const store = configureStore({
    reducer,
});
