import { createAsyncThunk } from '@reduxjs/toolkit';
import dbx from '../../utils/dropbox-setup';

/**
 * Async thunk to upload a file to Dropbox.
 *
 * @param {Object} payload - An object containing the path and file to be uploaded.
 * @param {string} payload.path - The path where the file should be uploaded.
 * @param {File} payload.file - The file to be uploaded.
 * @param {Object} thunkAPI - The Redux Toolkit Async Thunk API.
 * @returns {Promise} - A promise containing the serialized response or an error with details.
 */
const uploadFile = createAsyncThunk('dropbox/uploadFile', async ({ path, file }, { rejectWithValue }) => {
    try {
        // Make an API call to Dropbox to upload the specified file
        const response = await dbx.filesUpload({
            path,
            contents: file,
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
            status: error.status,
            result: null,
            message: error.message,
        });
    }
});

export default uploadFile;
