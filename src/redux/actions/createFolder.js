import { createAsyncThunk } from '@reduxjs/toolkit';

import dbx from '../../utils/dropbox-setup';

/**
 * Async thunk to create a new folder on Dropbox.
 *
 * @param {Object} payload - An object containing the path and folderName.
 * @param {string} payload.path - The path where the new folder should be created.
 * @param {string} payload.folderName - The name of the new folder to be created.
 * @param {Object} thunkAPI - The Redux Toolkit Async Thunk API.
 * @returns {Promise} - A promise containing the serialized response or an error with details.
 */
const createFolder = createAsyncThunk('dropbox/createFolder', async ({ path, folderName }, { rejectWithValue }) => {
    try {
        // Make an API call to Dropbox to create a new folder
        const response = await dbx.filesCreateFolderV2({
            path: `${path}/${folderName}`,
        });

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

export default createFolder;
