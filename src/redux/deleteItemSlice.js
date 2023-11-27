import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dbx from '../utils/dropbox-setup';

export const deleteItem = createAsyncThunk('dropbox/deleteItem', async (path, { rejectWithValue }) => {
    try {
        const response = await dbx.filesDeleteV2({ path });

        const serializedResponse = {
            status: response.status,
            result: response.result,
        };

        return serializedResponse;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const deleteItemSlice = createSlice({
    name: 'dropbox',
    initialState: {
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(deleteItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteItem.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(deleteItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default deleteItemSlice.reducer;
