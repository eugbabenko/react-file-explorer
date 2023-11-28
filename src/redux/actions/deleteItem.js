import { createAsyncThunk } from '@reduxjs/toolkit';
import dbx from '../../utils/dropbox-setup';

const deleteItem = createAsyncThunk('dropbox/deleteItem', async (path, { rejectWithValue }) => {
    try {
        const response = await dbx.filesDeleteV2({ path });

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

export default deleteItem;
