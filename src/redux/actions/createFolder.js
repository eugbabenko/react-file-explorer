import { createAsyncThunk } from '@reduxjs/toolkit';

import dbx from '../../utils/dropbox-setup';

const createFolder = createAsyncThunk('dropbox/createFolder', async ({ path, folderName }, { rejectWithValue }) => {
    try {
        const response = await dbx.filesCreateFolderV2({
            path: `${path}/${folderName}`,
        });

        const serializedResponse = {
            status: response.status,
            result: response.result,
        };
        return serializedResponse;
    } catch (error) {
        return rejectWithValue({
            status: 'error',
            result: null,
            message: error.message,
        });
    }
});

export default createFolder;
