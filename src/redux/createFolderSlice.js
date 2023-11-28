import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import dbx from '../utils/dropbox-setup';

export const createFolder = createAsyncThunk('dropbox/createFolder', async ({ path, folderName }, { rejectWithValue }) => {
    try {
        const response = await dbx.filesCreateFolderV2({
            path: `${path}/${folderName}`,
        });

        const serializedResponse = {
            status: response.status,
            result: response.result,
        };
        return serializedResponse;
    } catch (error) {
        return rejectWithValue({
            status: 'error',
            result: null,
            message: error.message,
        });
    }
});

const createFolderSlice = createSlice({
    name: 'dropbox',
    initialState: {
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createFolder.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createFolder.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(createFolder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default createFolderSlice.reducer;
