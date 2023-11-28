import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fetchReducer from './fetchItemsSlice';
import createFolderReducer from './createFolderSlice';
import updateFilesSlice from './updateItemsSlice';
import deleteItemSlice from './deleteItemSlice';
import uploadFileSlice from './uploadFileSlice';
import downloadItemSlice from './downloadItemSlice';
import getSharingLinkSlice from './getSharingLinkSlice';
import pathSlice from './pathSlice';

const reducer = combineReducers({
    fetchReducer,
    pathSlice,
    createFolderReducer,
    updateFilesSlice,
    deleteItemSlice,
    uploadFileSlice,
    downloadItemSlice,
    getSharingLinkSlice,
});

export const store = configureStore({
    reducer,
});
