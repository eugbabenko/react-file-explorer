import { createAsyncThunk } from '@reduxjs/toolkit';
import dbx from '../../utils/dropbox-setup';

const getSharingLink = createAsyncThunk('dropbox/getSharingLink', async (path, { rejectWithValue }) => {
    try {
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

        return newLinkResponse.result.url;
    } catch (error) {
        return rejectWithValue({
            status: error.status,
            result: error.result,
            message: error.error,
        });
    }
});

export default getSharingLink;
