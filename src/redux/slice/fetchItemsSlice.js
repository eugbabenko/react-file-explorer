import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import dbx from '../../utils/dropbox-setup';

// Initial state for the fetchReducer
const initialState = {
    items: [],
    loading: false,
    error: null,
};

/**
 * Async thunk to fetch items from Dropbox.
 *
 * @param {string} path - The path from which items are to be fetched.
 * @returns {Promise} - A promise containing the fetched items or an error with details.
 */
export const fetchItemsFromDbx = createAsyncThunk('dropbox/fetchItems', async (path) => {
    try {
        // Make an API call to Dropbox to fetch items from the specified path
        const response = await dbx.filesListFolder({ path: path });
        // Extract the entries from the response
        const data = response.result.entries;
        return data;
    } catch (error) {
        throw error.message;
    }
});

// Create the fetchReducer slice
const fetchReducer = createSlice({
    name: 'dropbox',
    initialState,
    extraReducers: (builder) => {
        builder
            // Handle pending state when fetching items
            .addCase(fetchItemsFromDbx.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Handle fulfilled state when items are successfully fetched
            .addCase(fetchItemsFromDbx.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.error = null;
            })
            // Handle rejected state when there is an error fetching items
            .addCase(fetchItemsFromDbx.rejected, (state, action) => {
                state.loading = false;
                state.items = [];
                state.error = action.error.message;
            });
    },
});

export default fetchReducer.reducer;
