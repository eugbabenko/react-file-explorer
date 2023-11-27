import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import dbx from '../utils/dropbox-setup';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchItemsFromDbx = createAsyncThunk('items/fetchItems', async (path) => {
    try {
        const response = await dbx.filesListFolder({ path: path });
        const data = response.result.entries;
        return data;
    } catch (error) {
        throw error.message;
    }
});

const fetchReducer = createSlice({
    name: 'items',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsFromDbx.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchItemsFromDbx.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchItemsFromDbx.rejected, (state, action) => {
                state.loading = false;
                state.items = [];
                state.error = action.error.message;
            });
    },
});

export default fetchReducer.reducer;
