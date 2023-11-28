import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fetchReducer from './slice/fetchItemsSlice';
import updateFilesSlice from './slice/updateItemsSlice';
import dropboxSlice from './slice/dropboxSlice';
import downloadItemSlice from './downloadItemSlice';
import pathSlice from './slice/pathSlice';

const reducer = combineReducers({
    fetchReducer,
    pathSlice,
    dropboxSlice,
    updateFilesSlice,
    downloadItemSlice,
});

export const store = configureStore({
    reducer,
});
