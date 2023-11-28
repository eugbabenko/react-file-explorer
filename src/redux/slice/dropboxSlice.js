import { createSlice } from '@reduxjs/toolkit';

import createFolder from '../actions/createFolder';
import uploadFile from '../actions/uploadFile';
import deleteItem from '../actions/deleteItem';
import getSharingLink from '../actions/getSharingLink';

/**
 * Redux slice for managing Dropbox-related actions and state.
 */
const dropboxSlice = createSlice({
    name: 'dropbox',
    initialState: {
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            // Handle pending state for multiple async actions
            .addCase(createFolder.pending, uploadFile.pending, deleteItem.pending, getSharingLink.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Handle fulfilled state for multiple async actions
            .addCase(createFolder.fulfilled, uploadFile.fulfilled, deleteItem.fulfilled, getSharingLink.fulfilled, (state) => {
                state.loading = false;
            })
            // Handle rejected state for multiple async actions
            .addCase(createFolder.rejected, uploadFile.rejected, deleteItem.rejected, getSharingLink.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default dropboxSlice.reducer;
