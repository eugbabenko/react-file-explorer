import { createAsyncThunk } from '@reduxjs/toolkit';
import dbx from '../../utils/dropbox-setup';

/**
 * Async thunk to delete an item from Dropbox.
 *
 * @param {string} path - The path of the item to be deleted.
 * @param {Object} thunkAPI - The Redux Toolkit Async Thunk API.
 * @returns {Promise} - A promise containing the serialized response or an error with details.
 */
const deleteItem = createAsyncThunk('dropbox/deleteItem', async (path, { rejectWithValue }) => {
    try {
        // Make an API call to Dropbox to delete the specified item
        const response = await dbx.filesDeleteV2({ path });

        // Serialize the response for better handling in reducers
        const serializedResponse = {
            status: response.status,
            result: response.result,
        };

        return serializedResponse;
    } catch (error) {
        // Handle errors and reject with a specific structure for error handling
        return rejectWithValue({
            status: 'error',
            result: null,
            message: error.message,
        });
    }
});

export default deleteItem;
