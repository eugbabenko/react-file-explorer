import { createAsyncThunk } from '@reduxjs/toolkit';
import dbx from '../../utils/dropbox-setup';

const uploadFile = createAsyncThunk('dropbox/uploadFile', async ({ path, file }, { rejectWithValue }) => {
    try {
        const response = await dbx.filesUpload({
            path,
            contents: file,
        });

        const serializedResponse = {
            status: response.status,
            result: response.result,
        };
        return serializedResponse;
    } catch (error) {
        return rejectWithValue({
            status: error.status,
            result: null,
            message: error.message,
        });
    }
});

export default uploadFile;
