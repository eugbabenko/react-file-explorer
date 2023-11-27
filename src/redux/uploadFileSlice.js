import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dbx from '../utils/dropbox-setup';

export const uploadFile = createAsyncThunk('dropbox/uploadFile', async ({ path, file }, { rejectWithValue }) => {
    try {
        const response = await dbx.filesUpload({
            path,
            contents: file,
        });

        const serializedResponse = {
            status: response.status,
            result: response.result,
        };

        return serializedResponse;
    } catch (error) {
        return rejectWithValue({
            status: error.status,
            result: error.result,
        });
    }
});

const uploadFileSlice = createSlice({
    name: 'dropbox',
    initialState: {
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(uploadFile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(uploadFile.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(uploadFile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default uploadFileSlice.reducer;
