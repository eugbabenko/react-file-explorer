import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Dropbox } from 'dropbox';

const fetch = window.fetch.bind(window);

const dbx = new Dropbox({
    accessToken: import.meta.env.VITE_APP_ACCESS_TOKEN,
    fetch,
});

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export const fetchFilesAsync = createAsyncThunk('items/fetchItems', async (path) => {
    try {
        const response = await dbx.filesListFolder({ path: path });
        const data = response.result.entries;
        return data;
    } catch (error) {
        throw error.message;
    }
});

const fetchSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilesAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFilesAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchFilesAsync.rejected, (state, action) => {
                state.loading = false;
                state.items = [];
                state.error = action.error.message;
            });
    },
});

export default fetchSlice.reducer;
