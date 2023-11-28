import { createAsyncThunk } from '@reduxjs/toolkit';
import dbx from '../../utils/dropbox-setup';

/**
 * Async thunk to retrieve a sharing link for a Dropbox item.
 *
 * @param {string} path - The path of the item for which a sharing link is requested.
 * @param {Object} thunkAPI - The Redux Toolkit Async Thunk API.
 * @returns {Promise} - A promise containing the sharing link URL or an error with details.
 */
const getSharingLink = createAsyncThunk('dropbox/getSharingLink', async (path, { rejectWithValue }) => {
    try {
        // Check if an existing sharing link already exists for the item
        const existingLinkResponse = await dbx.sharingListSharedLinks({
            path,
            direct_only: true,
        });

        // If an existing link is found, return it
        if (existingLinkResponse.result.links.length > 0) {
            return existingLinkResponse.result.links[0].url;
        }

        // If no existing link is found, create a new shared link
        const newLinkResponse = await dbx.sharingCreateSharedLinkWithSettings({
            path,
        });

        // Return the newly created sharing link
        return newLinkResponse.result.url;
    } catch (error) {
        // Handle errors and reject with a specific structure for error handling
        return rejectWithValue({
            status: error.status,
            result: error.result,
            message: error.error,
        });
    }
});

export default getSharingLink;
