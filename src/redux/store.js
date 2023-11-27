import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fetchReducer from './fetchItemsSlice';
import createFolderReducer from './createFolderSlice';
import updateFilesSlice from './updateItemsSlice';
import pathSlice from './pathSlice';

const reducer = combineReducers({
    fetchReducer,
    pathSlice,
    createFolderReducer,
    updateFilesSlice,
});

export const store = configureStore({
    reducer,
});
